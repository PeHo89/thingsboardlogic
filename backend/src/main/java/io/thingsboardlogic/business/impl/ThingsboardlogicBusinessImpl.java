package io.thingsboardlogic.business.impl;

import io.thingsboardlogic.business.ThingsboardlogicBusiness;
import io.thingsboardlogic.model.EditWatcherDto;
import io.thingsboardlogic.model.SaveWatcherDto;
import io.thingsboardlogic.model.Watcher;
import io.thingsboardlogic.model.WatcherDao;
import io.thingsboardlogic.model.WatcherDto;
import io.thingsboardlogic.persistence.WatcherPersistence;
import io.thingsboardlogic.persistence.impl.WatcherPersistenceImplCassandra;
import io.thingsboardlogic.util.Utils;

import java.util.ArrayList;
import java.util.UUID;

/**
 * Implementation of business layer of Thingsboardlogic
 */
public class ThingsboardlogicBusinessImpl implements ThingsboardlogicBusiness {

    private WatcherPersistence watcherPersistence = null;

    private String host = "";
    private String port = "";
    private String email = "";
    private String password = "";
    private boolean loggedIn = false;

    private ArrayList<Watcher> watcherList = new ArrayList<>();


    private ThingsboardlogicBusinessImpl() {
    }

    public ThingsboardlogicBusinessImpl(String databaseAddress) {
        this.watcherPersistence = new WatcherPersistenceImplCassandra(databaseAddress);
    }


    @Override
    public String login(String email, String password, String host, String port) {
        if(!host.startsWith("http://")) {
            host = "http://"+host;
        }
        if(!this.loggedIn) {
            String loginResponse = Utils.getJwt(host, port, email, password);

            if(loginResponse == null) {
                this.host = "";
                this.port = "";
                this.email = "";
                this.password = "";
                this.watcherPersistence.disconnect();
                this.loggedIn = false;
                this.watcherList.clear();
                return "notLoggedIn";
            } else {
                this.host = host;
                this.port = port;
                this.email = email;
                this.password = password;
                this.loggedIn = true;
                loadWatcherToUserEmail();
                return "loggedIn";
            }
        }
        return "loggedIn";
    }

    @Override
    public String logout() {
        if(this.loggedIn){
            this.loggedIn = false;
        }
        return "loggedOut";
    }

    @Override
    public String deleteAccount() {
        if(this.loggedIn){
            for(Watcher watcher: this.watcherList) {
                if(watcher.isActive()) {
                    watcher.interrupt();
                }
                this.watcherPersistence.deleteWatcher(watcher.getWatcherId());
            }
            this.watcherPersistence.disconnect();
            this.loggedIn = false;
            this.watcherList.clear();
            return "accountDeleted";
        }
        return "accountNotDeleted";
    }

    @Override
    public String startWatcher(String watcherId) {
        if(this.loggedIn) {
            ArrayList<Watcher> tempWatcherList = new ArrayList<>();
            for (Watcher watcher : this.watcherList) {
                if (watcher.getWatcherId().equals(watcherId) && !watcher.isActive()) {
                    //Watcher extends Thread and Threads can not be restarted easily, so the Watcher has to be copied
                    Watcher tempWatcher = new Watcher(watcher);
                    tempWatcher.start();
                    tempWatcherList.add(tempWatcher);
                    this.watcherPersistence.setWatcherState(tempWatcher.getWatcherId(), true);
                } else {
                    tempWatcherList.add(watcher);
                }
            }
            this.watcherList = tempWatcherList;
            return "watcherStarted";
        }
        return "watcherNotStarted";
    }

    @Override
    public String stopWatcher(String watcherId) {
        if(this.loggedIn) {
            for (Watcher watcher : this.watcherList) {
                if (watcher.getWatcherId().equals(watcherId) && watcher.isActive()) {
                    watcher.interrupt();
                    this.watcherPersistence.setWatcherState(watcher.getWatcherId(), false);
                    break;
                }
            }
            return "watcherStopped";
        }
        return "watcherNotStopped";
    }

    @Override
    public WatcherDto loadWatcher(String watcherId) {
        if(this.loggedIn) {
            WatcherDto watcherDto = null;
            for (Watcher tempWatcher : this.watcherList) {
                if (tempWatcher.getWatcherId().equals(watcherId)) {
                    watcherDto = new WatcherDto(tempWatcher.getWatcherId(), tempWatcher.getWatcherName(), tempWatcher.getBooleanLogic(), tempWatcher.getTimeGranularity(), tempWatcher.getSourceDeviceId(), tempWatcher.getSourceTelemetryKeys(), tempWatcher.getTargetDeviceId(), tempWatcher.getMessageTrue(), tempWatcher.getMessageFalse(), tempWatcher.isActive());
                    break;
                }
            }
            return watcherDto;
        }
        return null;
    }

    @Override
    public String deleteWatcher(String watcherId) {
        if(this.loggedIn) {
            ArrayList<Watcher> tempWatcherList = new ArrayList<>();
            for (Watcher watcher : this.watcherList) {
                if (!watcher.getWatcherId().equals(watcherId)) {
                    tempWatcherList.add(watcher);
                } else {
                    if (watcher.isActive()) {
                        watcher.interrupt();
                    }
                    this.watcherPersistence.deleteWatcher(watcherId);
                }
            }
            this.watcherList = tempWatcherList;
            return "watcherDeleted";
        }
        return "watcherNotDeleted";
    }

    @Override
    public String[] loadTelemetryKeys(String deviceId) {
        if(this.loggedIn) {
            String jwt = Utils.getJwt(this.host, this.port, this.email, this.password);

            ArrayList<String> header = new ArrayList<>();
            header.add("X-Authorization:Bearer " + jwt);

            String address = Utils.LOAD_TELEMETRY_KEYS_LINK.replace("${HOST}", this.host).replace("${PORT}", this.port).replace("${DEVICEID}", deviceId);

            String telemetryKeysToDeviceId = Utils.executeHttpGetRequest(address, header);

            telemetryKeysToDeviceId = telemetryKeysToDeviceId.substring(1, telemetryKeysToDeviceId.length() - 2);
            telemetryKeysToDeviceId = telemetryKeysToDeviceId.replace("\"", "");

            return telemetryKeysToDeviceId.split(",");
        }
        return null;
    }

    @Override
    public String saveWatcher(SaveWatcherDto saveWatcherDto) {
        if(this.loggedIn) {
            saveWatcherDto.setBooleanlogic(saveWatcherDto.getBooleanlogic().replace("and", "&"));

            String randomWatcherId = UUID.randomUUID().toString();

            Watcher watcher = new Watcher(randomWatcherId, this.host, this.port, this.email, this.password, saveWatcherDto.getBooleanlogic(), Integer.parseInt(saveWatcherDto.getTimegranularity()), saveWatcherDto.getSourcedeviceid(), saveWatcherDto.getSourcetelemetrykeys(), saveWatcherDto.getTargetdeviceid(), saveWatcherDto.getMessagetrue(), saveWatcherDto.getMessagefalse(), saveWatcherDto.getWatchername());

            watcher.start();
            this.watcherList.add(watcher);

            WatcherDao watcherDao = new WatcherDao(watcher.getWatcherId(), new Watcher(watcher), watcher.isActive(), this.email);

            this.watcherPersistence.saveWatcher(watcherDao);

            return "watcherSaved";
        }
        return "watcherNotSaved";
    }

    @Override
    public String editWatcher(EditWatcherDto editWatcherDto) {
        if(this.loggedIn) {
            editWatcherDto.setBooleanlogic(editWatcherDto.getBooleanlogic().replace("and", "&"));

            Watcher oldWatcher = null;

            for (Watcher tempWatcher : this.watcherList) {
                if (tempWatcher.getWatcherId().equals(editWatcherDto.getWatcherid())) {
                    oldWatcher = tempWatcher;
                    break;
                }
            }

            if (oldWatcher != null) {
                Watcher newWatcher = new Watcher(oldWatcher.getWatcherId(), oldWatcher.getHost(), oldWatcher.getPort(), oldWatcher.getEmail(), oldWatcher.getPassword(), editWatcherDto.getBooleanlogic(), Integer.parseInt(editWatcherDto.getTimegranularity()), oldWatcher.getSourceDeviceId(), oldWatcher.getSourceTelemetryKeys(), oldWatcher.getTargetDeviceId(), editWatcherDto.getMessagetrue(), editWatcherDto.getMessagefalse(), editWatcherDto.getWatchername());

                if (oldWatcher.isActive()) {
                    newWatcher.start();
                }
                deleteWatcher(editWatcherDto.getWatcherid());

                this.watcherList.add(newWatcher);

                WatcherDao watcherDao = new WatcherDao(newWatcher.getWatcherId(), new Watcher(newWatcher), newWatcher.isActive(), this.email);

                this.watcherPersistence.updateWatcher(watcherDao);

                return "watcherEdited";
            }
        }
        return "watcherNotEdited";
    }

    @Override
    public ArrayList<WatcherDto> getWatcherList() {
        if(this.loggedIn) {
            ArrayList<WatcherDto> watcherDtoArrayList = new ArrayList<>();
            for (Watcher tempWatcher : this.watcherList) {
                WatcherDto watcherDto = new WatcherDto(tempWatcher.getWatcherId(), tempWatcher.getWatcherName(), tempWatcher.getBooleanLogic(), tempWatcher.getTimeGranularity(), tempWatcher.getSourceDeviceId(), tempWatcher.getSourceTelemetryKeys(), tempWatcher.getTargetDeviceId(), tempWatcher.getMessageTrue(), tempWatcher.getMessageFalse(), tempWatcher.isActive());
                watcherDtoArrayList.add(watcherDto);
            }
            return watcherDtoArrayList;
        }
        return null;
    }

    @Override
    public boolean isLoggedIn() {
        return this.loggedIn;
    }

    private void loadWatcherToUserEmail() {
        ArrayList<WatcherDao> watcherDaoArrayList = this.watcherPersistence.loadWatcherToUserEmail(this.email);

        for(WatcherDao watcherDao: watcherDaoArrayList) {
            Watcher watcher = watcherDao.getWatcher();

            boolean watcherAlreadyInList = false;

            for (Watcher tempWatcher : this.watcherList) {
                if (tempWatcher.getWatcherId().equals(watcher.getWatcherId())) {
                    watcherAlreadyInList = true;
                    break;
                }
            }
            if(!watcherAlreadyInList) {
                if(watcherDao.isActive()) {
                    watcher.start();
                }
                this.watcherList.add(watcher);
            }
        }
    }
}

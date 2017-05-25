package io.thingsboardlogic.model;

import io.thingsboardlogic.util.Utils;
import lombok.Data;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

/**
 * Watcher for Thingsboardlogic
 */
@Data
public class Watcher extends Thread implements Bufferable {

    private String watcherId;
    private String host;
    private String port;
    private String email;
    private String password;
    private String booleanLogic;
    private int timeGranularity;
    private String sourceDeviceId;
    private String sourceTelemetryKeys;
    private String targetDeviceId;
    private String messageTrue;
    private String messageFalse;
    private String watcherName;
    private boolean active;


    private Watcher() {
    }

    public Watcher(String watcherId, String host, String port, String email, String password, String booleanLogic, int timeGranularity, String sourceDeviceId, String sourceTelemetryKeys, String targetDeviceId, String messageTrue, String messageFalse, String watcherName) {
        this.watcherId = watcherId;
        this.host = host;
        this.port = port;
        this.email = email;
        this.password = password;
        this.booleanLogic = booleanLogic;
        this.timeGranularity = timeGranularity;
        this.sourceDeviceId = sourceDeviceId;
        this.sourceTelemetryKeys = sourceTelemetryKeys;
        this.targetDeviceId = targetDeviceId;
        this.messageTrue = messageTrue;
        this.messageFalse = messageFalse;
        this.watcherName = watcherName;
        this.active = false;
    }

    public Watcher(Watcher watcher) {
        this.watcherId = watcher.getWatcherId();
        this.host = watcher.getHost();
        this.port = watcher.getPort();
        this.email = watcher.getEmail();
        this.password = watcher.getPassword();
        this.booleanLogic = watcher.getBooleanLogic();
        this.timeGranularity = watcher.getTimeGranularity();
        this.sourceDeviceId = watcher.getSourceDeviceId();
        this.sourceTelemetryKeys = watcher.getSourceTelemetryKeys();
        this.targetDeviceId = watcher.getTargetDeviceId();
        this.messageTrue = watcher.getMessageTrue();
        this.messageFalse = watcher.getMessageFalse();
        this.watcherName = watcher.getWatcherName();
        this.active = false;
    }


    @Override
    public void run() {
        this.active = true;

        while (this.active) {
            try {
                Thread.sleep(this.timeGranularity);
            } catch (InterruptedException e) {
                System.err.println("Error while waiting due to time granularity.");
            }

            long unixTime = System.currentTimeMillis() - this.timeGranularity;

            String loadTelemetryDataAddress = Utils.LOAD_TELEMETRY_DATA_LINK.replace("${HOST}", this.host).replace("${PORT}", this.port).replace("${DEVICEID}", this.sourceDeviceId).replace("${KEYS}", this.sourceTelemetryKeys).replace("${STARTTS}", unixTime + "");

            String jwt = Utils.getJwt(this.host, this.port, this.email, this.password);

            ArrayList<String> header = new ArrayList<>();
            header.add("X-Authorization:Bearer " + jwt);

            String result = Utils.executeHttpGetRequest(loadTelemetryDataAddress, header);

            try {
                ArrayList<String> telemetryKeys = new ArrayList<>(Arrays.asList(this.sourceTelemetryKeys.split(",")));
                HashMap<String, String> keyValueMap = new HashMap<>();

                for (String key : telemetryKeys) {
                    String value = Utils.jsonStringToJsonObjectConverter(result).get(key).toString();
                    value = value.substring(1, value.length() - 1);
                    value = (String) Utils.jsonStringToJsonObjectConverter(value).get("value");
                    keyValueMap.put(key, value);
                }

                String logic = this.booleanLogic;

                for (String key : telemetryKeys) {
                    if (this.booleanLogic.contains(key)) {
                        logic = logic.replace(key, keyValueMap.get(key));
                    }
                }

                String sendMessageToTargetAddress = Utils.RPC_CALL_LINK.replace("${HOST}", this.host).replace("${PORT}", this.port).replace("${DEVICEID}", this.targetDeviceId);

                String messageBody;

                ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
                ScriptEngine scriptEngine = scriptEngineManager.getEngineByName("JavaScript");

                if ((Boolean) scriptEngine.eval(logic)) {
                    messageBody = this.messageTrue;
                } else {
                    messageBody = this.messageFalse;
                }

                result = Utils.executeHttpPostRequest(sendMessageToTargetAddress, messageBody, header);

            } catch (NullPointerException e) {
                System.err.println("No telemetry data available.");
            } catch (ScriptException e) {
                System.err.println("Error while evaluating boolean logic.");
            }
        }
    }

    @Override
    public void interrupt() {
        this.active = false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
//        if (!super.equals(o)) return false;

        Watcher watcher = (Watcher) o;

        if (timeGranularity != watcher.timeGranularity) return false;
        if (active != watcher.active) return false;
        if (watcherId != null ? !watcherId.equals(watcher.watcherId) : watcher.watcherId != null) return false;
        if (host != null ? !host.equals(watcher.host) : watcher.host != null) return false;
        if (port != null ? !port.equals(watcher.port) : watcher.port != null) return false;
        if (email != null ? !email.equals(watcher.email) : watcher.email != null) return false;
        if (password != null ? !password.equals(watcher.password) : watcher.password != null) return false;
        if (booleanLogic != null ? !booleanLogic.equals(watcher.booleanLogic) : watcher.booleanLogic != null)
            return false;
        if (sourceDeviceId != null ? !sourceDeviceId.equals(watcher.sourceDeviceId) : watcher.sourceDeviceId != null)
            return false;
        if (sourceTelemetryKeys != null ? !sourceTelemetryKeys.equals(watcher.sourceTelemetryKeys) : watcher.sourceTelemetryKeys != null)
            return false;
        if (targetDeviceId != null ? !targetDeviceId.equals(watcher.targetDeviceId) : watcher.targetDeviceId != null)
            return false;
        if (messageTrue != null ? !messageTrue.equals(watcher.messageTrue) : watcher.messageTrue != null) return false;
        if (messageFalse != null ? !messageFalse.equals(watcher.messageFalse) : watcher.messageFalse != null)
            return false;
        return watcherName != null ? watcherName.equals(watcher.watcherName) : watcher.watcherName == null;
    }
}

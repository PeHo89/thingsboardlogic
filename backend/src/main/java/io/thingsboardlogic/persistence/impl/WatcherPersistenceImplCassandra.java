package io.thingsboardlogic.persistence.impl;

import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.utils.Bytes;
import io.thingsboardlogic.model.Bufferable;
import io.thingsboardlogic.model.Watcher;
import io.thingsboardlogic.model.WatcherDao;
import io.thingsboardlogic.persistence.WatcherPersistence;

import java.util.ArrayList;
import java.util.List;

/**
 * Implementation of persistence layer of Thingsboardlogic
 */
public class WatcherPersistenceImplCassandra implements WatcherPersistence {

    private String databaseAddress = "";
    private Cluster cluster = null;


    private WatcherPersistenceImplCassandra() {
    }

    public WatcherPersistenceImplCassandra(String databaseAddress) {
        if(databaseAddress == null) {
            databaseAddress = "";
        }
        if (databaseAddress.startsWith("http://")) {
            databaseAddress = databaseAddress.replace("http://", "");
        }
        this.databaseAddress = databaseAddress;
        this.cluster = Cluster.builder().addContactPoint(this.databaseAddress).build();
    }


    @Override
    public void disconnect() {
        if (this.cluster != null) {
            this.cluster.close();
        }
    }

    @Override
    public boolean saveWatcher(WatcherDao watcherDao) {
        if(watcherDao == null || watcherDao.getWatcherId() == null || watcherDao.getWatcherId().equals("") || watcherDao.getWatcher() == null || watcherDao.getUserEmail() == null || watcherDao.getUserEmail().equals("")) {
            return false;
        }
        Session session = this.cluster.connect();

        ResultSet resultSet = session.execute("insert into thingsboardlogic.watcher (watcherid, watcher, active, useremail) values ('" + watcherDao.getWatcherId() + "', '" + Bytes.toHexString(watcherDao.getWatcher().serialize()) + "', " + watcherDao.isActive() + ", '" + watcherDao.getUserEmail() + "');");

        session.close();

        return resultSet.wasApplied();
    }

    @Override
    public boolean updateWatcher(WatcherDao watcherDao) {
        if(watcherDao == null || watcherDao.getWatcherId() == null || watcherDao.getWatcherId().equals("") || watcherDao.getWatcher() == null || watcherDao.getUserEmail() == null || watcherDao.getUserEmail().equals("")) {
            return false;
        }
        Session session = this.cluster.connect();

        ResultSet resultSet = session.execute("update thingsboardlogic.watcher set watcher = '" + Bytes.toHexString(watcherDao.getWatcher().serialize()) + "', active = " + watcherDao.isActive() + ", useremail = '" + watcherDao.getUserEmail() + "' where watcherid = '" + watcherDao.getWatcherId() + "';");

        session.close();

        return resultSet.wasApplied();
    }

    @Override
    public boolean setWatcherState(String watcherId, boolean active) {
        if(watcherId == null || watcherId.equals("")) {
            return false;
        }
        Session session = this.cluster.connect();

        ResultSet resultSet = session.execute("update thingsboardlogic.watcher set active = " + active + " where watcherid = '" + watcherId + "';");

        session.close();

        return resultSet.wasApplied();
    }

    @Override
    public WatcherDao loadWatcher(String watcherId) {
        if(watcherId == null || watcherId.equals("")) {
            return null;
        }
        Session session = this.cluster.connect();

        ResultSet resultSet = session.execute("select * from thingsboardlogic.watcher where watcherid = '" + watcherId + "';");
        Row row = resultSet.one();

        WatcherDao watcherDao = new WatcherDao(row.getString("watcherid"), (Watcher) Bufferable.deserialize(Bytes.fromHexString(row.getString("watcher"))), row.getBool("active"), row.getString("useremail"));

        session.close();

        return watcherDao;
    }

    @Override
    public ArrayList<WatcherDao> loadWatcherToUserEmail(String userEmail) {
        if(userEmail == null || userEmail.equals("")) {
            return new ArrayList<>();
        }
        Session session = this.cluster.connect();

        ResultSet resultSet = session.execute("select * from thingsboardlogic.watcher where useremail = '" + userEmail + "' allow filtering;");

        ArrayList<WatcherDao> watcherDaoList = new ArrayList<>();

        List<Row> rowList = resultSet.all();

        for (Row row : rowList) {
            WatcherDao watcherDao = new WatcherDao(row.getString("watcherid"), (Watcher) Bufferable.deserialize(Bytes.fromHexString(row.getString("watcher"))), row.getBool("active"), row.getString("useremail"));

            watcherDaoList.add(watcherDao);
        }

        session.close();

        return watcherDaoList;
    }

    @Override
    public boolean deleteWatcher(String watcherId) {
        if(watcherId == null || watcherId.equals("")) {
            return false;
        }
        Session session = this.cluster.connect();

        ResultSet resultSet = session.execute("delete from thingsboardlogic.watcher where watcherid = '" + watcherId + "';");

        session.close();

        return resultSet.wasApplied();
    }
}

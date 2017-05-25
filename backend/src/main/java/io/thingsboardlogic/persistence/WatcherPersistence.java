package io.thingsboardlogic.persistence;

import io.thingsboardlogic.model.WatcherDao;

import java.util.ArrayList;

/**
 * Interface for persistence layer of Thingsboardlogic
 */
public interface WatcherPersistence {

    /**
     * Disconnects from database
     */
    void disconnect();

    /**
     * Saves a new Watcher
     * @param watcherDao
     * @return
     */
    boolean saveWatcher(WatcherDao watcherDao);

    /**
     * Updates a Watcher
     * @param watcherDao
     * @return
     */
    boolean updateWatcher(WatcherDao watcherDao);

    /**
     * Sets state of Watcher
     * @param watcherId
     * @param active
     * @return
     */
    boolean setWatcherState(String watcherId, boolean active);

    /**
     * Loads a Watcher
     * @param watcherId
     * @return
     */
    WatcherDao loadWatcher(String watcherId);

    /**
     * Loads all Watcher from an user
     * @param userEmail
     * @return
     */
    ArrayList<WatcherDao> loadWatcherToUserEmail(String userEmail);

    /**
     * Deletes a Watcher
     * @param watcherId
     * @return
     */
    boolean deleteWatcher(String watcherId);
}

package io.thingsboardlogic.business;

import io.thingsboardlogic.model.EditWatcherDto;
import io.thingsboardlogic.model.SaveWatcherDto;
import io.thingsboardlogic.model.WatcherDto;

import java.util.ArrayList;

/**
 * Interface for business layer of Thingsboardlogic
 */
public interface ThingsboardlogicBusiness {

    /**
     * Login of user
     * @param email
     * @param password
     * @param host
     * @param port
     * @return
     */
    String login(String email, String password, String host, String port);

    /**
     * Logout of user
     * @return
     */
    String logout();

    /**
     * Deletes a user account on Thingsboardlogic with all saved Watcher
     * @return
     */
    String deleteAccount();

    /**
     * Starts a Watcher
     * @param watcherId
     * @return
     */
    String startWatcher(String watcherId);

    /**
     * Stops a Watcher
     * @param watcherId
     * @return
     */
    String stopWatcher(String watcherId);

    /**
     * Loads a Watcher
     * @param watcherId
     * @return
     */
    WatcherDto loadWatcher(String watcherId);

    /**
     * Deletes a Watcher
     * @param watcherId
     * @return
     */
    String deleteWatcher(String watcherId);

    /**
     * Loads telemetry data of device on Thingsboard
     * @param deviceId
     * @return
     */
    String[] loadTelemetryKeys(String deviceId);

    /**
     * Saves a new Watcher
     * @param saveWatcherDto
     * @return
     */
    String saveWatcher(SaveWatcherDto saveWatcherDto);

    /**
     * Updates a watcher
     * @param editWatcherDto
     * @return
     */
    String editWatcher(EditWatcherDto editWatcherDto);

    /**
     * Lists all available Watcher from a user
     * @return
     */
    ArrayList<WatcherDto> getWatcherList();

    /**
     * Checks, if the user is logged in
     * @return
     */
    boolean isLoggedIn();

}

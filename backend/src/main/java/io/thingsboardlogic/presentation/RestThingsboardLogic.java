package io.thingsboardlogic.presentation;

import io.thingsboardlogic.model.EditWatcherDto;
import io.thingsboardlogic.model.SaveWatcherDto;
import io.thingsboardlogic.model.StartStopWatcherDto;
import io.thingsboardlogic.model.WatcherDto;

import java.util.ArrayList;

/**
 * Interface for presentation layer of Thingsboardlogic
 */
public interface RestThingsboardLogic {

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
     * @param email
     * @return
     */
    String logout(String email);

    /**
     * Deletes a user account on Thingsboardlogic with all saved Watcher
     * @param email
     * @return
     */
    String deleteAccount(String email);

    /**
     * Starts a Watcher
     * @param startStopWatcherDto
     * @return
     */
    String startWatcher(StartStopWatcherDto startStopWatcherDto);

    /**
     * Stops a Watcher
     * @param startStopWatcherDto
     * @return
     */
    String stopWatcher(StartStopWatcherDto startStopWatcherDto);

    /**
     * Loads a Watcher
     * @param email
     * @param watcherId
     * @return
     */
    WatcherDto loadWatcher(String email, String watcherId);

    /**
     * Deletes a Watcher
     * @param email
     * @param watcherId
     * @return
     */
    String deleteWatcher(String email, String watcherId);

    /**
     * Loads telemetry data of device on Thingsboard
     * @param email
     * @param deviceId
     * @return
     */
    String[] loadTelemetryKeys(String email, String deviceId);

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
     * @param email
     * @return
     */
    ArrayList<WatcherDto> getWatcherList(String email);

    /**
     * Checks, if the user is logged in
     * @param email
     * @return
     */
    boolean isLoggedIn(String email);
}

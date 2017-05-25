package io.thingsboardlogic.model;

import lombok.Data;

/**
 * Dao for a Watcher
 */
@Data
public class WatcherDao {
    private String watcherId;
    private Watcher watcher;
    private boolean active;
    private String userEmail;

    private WatcherDao() {
    }

    public WatcherDao(String watcherId, Watcher watcher, boolean active, String userEmail) {
        this.watcherId = watcherId;
        this.watcher = watcher;
        this.active = active;
        this.userEmail = userEmail;
    }
}

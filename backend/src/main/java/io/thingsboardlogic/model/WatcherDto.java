package io.thingsboardlogic.model;

import lombok.Data;

/**
 * Dto for a Watcher
 */
@Data
public class WatcherDto {

    private String watcherId;
    private String watcherName;
    private String booleanLogic;
    private int timeGranularity;
    private String sourceDeviceId;
    private String sourceTelemetryKeys;
    private String targetDeviceId;
    private String messageTrue;
    private String messageFalse;
    private boolean active;

    public WatcherDto(String watcherId, String watcherName, String booleanLogic, int timeGranularity, String sourceDeviceId, String sourceTelemetryKeys, String targetDeviceId, String messageTrue, String messageFalse, boolean active) {
        this.watcherId = watcherId;
        this.watcherName = watcherName;
        this.booleanLogic = booleanLogic;
        this.timeGranularity = timeGranularity;
        this.sourceDeviceId = sourceDeviceId;
        this.sourceTelemetryKeys = sourceTelemetryKeys;
        this.targetDeviceId = targetDeviceId;
        this.messageTrue = messageTrue;
        this.messageFalse = messageFalse;
        this.active = active;
    }
}

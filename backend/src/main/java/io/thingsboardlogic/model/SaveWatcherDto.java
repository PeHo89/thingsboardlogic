package io.thingsboardlogic.model;

import lombok.Data;

/**
 * Dto for saving of a new Watcher
 */
@Data
public class SaveWatcherDto {

    private String email;
    private String sourcedeviceid;
    private String sourcetelemetrykeys;
    private String booleanlogic;
    private String timegranularity;
    private String targetdeviceid;
    private String messagetrue;
    private String messagefalse;
    private String watchername;

}

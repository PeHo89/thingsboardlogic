package io.thingsboardlogic.model;

import lombok.Data;

/**
 * Dto for updating a Watcher
 */
@Data
public class EditWatcherDto {

    private String email;
    private String watcherid;
    private String booleanlogic;
    private String timegranularity;
    private String messagetrue;
    private String messagefalse;
    private String watchername;

}

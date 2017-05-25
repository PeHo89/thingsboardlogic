package io.thingsboardlogic.model;

import lombok.Data;

/**
 * Dto for starting and stoping a Watcher
 */
@Data
public class StartStopWatcherDto {

    private String email;
    private String watcherid;

}

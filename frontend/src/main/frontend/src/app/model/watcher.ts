import {Injectable} from "@angular/core";

/**
 * Watcher for Thingsboardlogic
 */
@Injectable()
export class Watcher {

  public watcherId: string = "";
  public watcherName: string = "";
  public booleanLogic: string = "";
  public timeGranularity: number = -1;
  public sourceDeviceId: string = "";
  public sourceTelemetryKeys: string = "";
  public targetDeviceId: string = "";
  public messageTrue: string = "";
  public messageFalse: string = "";
  public active: boolean = false;

}

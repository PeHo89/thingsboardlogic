import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RestService} from "../services/rest.service";

/**
 * Component for adding a Watcher
 */
@Component({
  moduleId: module.id,
  selector: 'add',
  templateUrl: '../views/add.html',
  styleUrls: ['../styles/add.css']
})
export class AddComponent implements OnInit  {

  private sourcedeviceid: string = "";
  private booleanlogic: string = "";
  private timegranularity: number = null;
  private targetdeviceid: string = "";
  private messagetrue: string = "";
  private messagefalse: string = "";
  private watchername: string = "";
  private sourcetelemetrykeys: string[] = [];

  private sourcedeviceidVaild: boolean = true;
  private booleanlogicValid: boolean = true;
  private timegranularityValid: boolean = true;
  private targetdeviceidValid: boolean = true;
  private messagetrueValid: boolean = true;
  private messagefalseValid: boolean = true;
  private watchernameValid: boolean = true;


  constructor (private restService: RestService, private router: Router) {}


  ngOnInit() {
    this.restService.isLoggedIn().then(result => {
      if (result != true) {
        this.router.navigate(["login"]);
      }
    });
  }

  loadTelemetryKeys() {
    this.restService.isLoggedIn().then(result => {
      if (result != true) {
        this.router.navigate(["login"]);
      }
    });
    if(this.validateSourcedeviceidInput()) {
      this.restService.loadTelemetryKeys(this.sourcedeviceid).then(result => {
        this.sourcetelemetrykeys = result;
      });
    }
  }

  saveWatcher() {
    if(this.validateWatcherDataInput()) {
      this.restService.saveWatcher(this.sourcedeviceid, this.sourcetelemetrykeys, this.booleanlogic, this.timegranularity, this.targetdeviceid, this.messagetrue, this.messagefalse, this.watchername).then(result => {
        if (result == true) {
          this.router.navigate(["overview"]);
        } else {
          this.router.navigate(["error"]);
        }
      });
    }
  }

  validateSourcedeviceidInput():boolean {
    this.validateSourcedeviceid();
    return this.sourcedeviceidVaild;
  }

  validateWatcherDataInput():boolean {
    this.validateBooleanlogic();
    this.validateTimegranularity();
    this.validateTargetdeviceid();
    this.validateMessagetrue();
    this.validateMessagefalse();
    this.validateWatchername();
    return this.booleanlogicValid && this.timegranularityValid && this.targetdeviceidValid && this.messagetrueValid && this.messagefalseValid && this.watchernameValid;
  }

  validateSourcedeviceid() {
    this.sourcedeviceidVaild = this.sourcedeviceid.length > 0;
  }

  validateBooleanlogic() {
    this.booleanlogicValid = this.booleanlogic.length > 0;
  }

  validateTimegranularity() {
    this.timegranularityValid = Number(this.timegranularity) > 0;
  }

  validateTargetdeviceid() {
    this.targetdeviceidValid = this.targetdeviceid.length > 0;
  }

  validateMessagetrue() {
    this.messagetrueValid = this.messagetrue.length > 0;
  }

  validateMessagefalse() {
    this.messagefalseValid = this.messagefalse.length > 0;
  }

  validateWatchername() {
    this.watchernameValid = this.watchername.length > 0;
  }

  resetSourcedeviceidVaild() {
    this.sourcedeviceidVaild = true;
  }

  resetBooleanlogicVaild() {
    this.booleanlogicValid = true;
  }

  resetTimegranularityVaild() {
    this.timegranularityValid = true;
  }

  resetTargetdeviceidVaild() {
    this.targetdeviceidValid = true;
  }

  resetMessagetrueVaild() {
    this.messagetrueValid = true;
  }

  resetMessagefalseVaild() {
    this.messagefalseValid = true;
  }

  resetWatchernameVaild() {
    this.watchernameValid = true;
  }
}

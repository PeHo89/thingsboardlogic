import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Watcher} from "../model/watcher";
import {RestService} from "../services/rest.service";

/**
 * Component for updating a Watcher
 */
@Component({
  moduleId: module.id,
  selector: 'edit',
  templateUrl: '../views/edit.html',
  styleUrls: ['../styles/edit.css']
})
export class EditComponent implements OnInit  {

  private urlid: string;
  private watcherToEdit: Watcher = new Watcher();

  private booleanlogicValid: boolean = true;
  private timegranularityValid: boolean = true;
  private messagetrueValid: boolean = true;
  private messagefalseValid: boolean = true;
  private watchernameValid: boolean = true;


  constructor (private restService: RestService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.restService.isLoggedIn().then(result => {
      if (result != true) {
        this.router.navigate(["login"]);
      }
    });

    this.route.params.subscribe(params => {
      this.urlid = params['watcherid'];
    });

    this.loadWatcher();
  }

  loadWatcher() {
    this.restService.loadWatcher(this.urlid).then(result => {
      this.watcherToEdit = result;
    });
  }

  editWatcher() {
    if(this.validateWatcherDataInput()) {
      this.restService.editWatcher(this.watcherToEdit.watcherId, this.watcherToEdit.booleanLogic, this.watcherToEdit.timeGranularity, this.watcherToEdit.messageTrue, this.watcherToEdit.messageFalse, this.watcherToEdit.watcherName).then(result => {
        if (result == true) {
          this.router.navigate(["overview"]);
        } else {
          this.router.navigate(["error"]);
        }
      });
    }
  }

  validateWatcherDataInput():boolean {
    this.validateBooleanlogic();
    this.validateTimegranularity();
    this.validateMessagetrue();
    this.validateMessagefalse();
    this.validateWatchername();
    return this.booleanlogicValid && this.timegranularityValid && this.messagetrueValid && this.messagefalseValid && this.watchernameValid;
  }

  validateBooleanlogic() {
    this.booleanlogicValid = this.watcherToEdit.booleanLogic.length > 0;
  }

  validateTimegranularity() {
    this.timegranularityValid = Number(this.watcherToEdit.timeGranularity) > 0;
  }

  validateMessagetrue() {
    this.messagetrueValid = this.watcherToEdit.messageTrue.length > 0;
  }

  validateMessagefalse() {
    this.messagefalseValid = this.watcherToEdit.messageFalse.length > 0;
  }

  validateWatchername() {
    this.watchernameValid = this.watcherToEdit.watcherName.length > 0;
  }

  resetBooleanlogicValid() {
    this.booleanlogicValid = true;
  }

  resetTimegranularityValid() {
    this.timegranularityValid = true;
  }

  resetMessagetrueValid() {
    this.messagetrueValid = true;
  }

  resetMessagefalseValid() {
    this.messagefalseValid = true;
  }

  resetWatchernameValid() {
    this.watchernameValid = true;
  }
}

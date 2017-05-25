import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Watcher} from "../model/watcher";
import {RestService} from "../services/rest.service";

/**
 * Component for showing overview
 */
@Component({
  moduleId: module.id,
  selector: 'overview',
  templateUrl: '../views/overview.html',
  styleUrls: ['../styles/overview.css']
})
export class OverviewComponent implements OnInit {

  private watcherList: Watcher[] = [];
  private watcherForModal: Watcher = new Watcher();
  private watcherIdToDelete: string = "";
  private watcherNameToDelete: string = "";


  constructor (private restService: RestService, private router: Router) {}


  ngOnInit(){
    this.restService.isLoggedIn().then(result => {
      if (result != true) {
        this.router.navigate(["login"]);
      }
    });

    this.loadWatcherList();
  }

  loadWatcherList() {
    this.restService.loadWatcherList().then(result => {
      this.watcherList = result;
    });
  }

  startWatcher(watcherId:string) {
    this.restService.startWatcher(watcherId).then(result => {
      if(result == true) {
        this.loadWatcherList();
      } else {
        this.router.navigate(["error"]);
      }
    });
  }

  stopWatcher(watcherId:string) {
    this.restService.stopWatcher(watcherId).then(result => {
      if(result == true) {
        this.loadWatcherList();
      } else {
        this.router.navigate(["error"]);
      }
    });
  }

  prepareDelete(watcherid:string, watchername:string) {
    this.watcherIdToDelete = watcherid;
    this.watcherNameToDelete = watchername;
  }

  deleteWatcher() {
    this.restService.deleteWatcher(this.watcherIdToDelete).then(result => {
      if(result == true) {
        this.loadWatcherList();
      } else {
        this.router.navigate(["error"]);
      }
    });
  }

  loadWatcherForModal(watcherId:string) {
    for(let watcher of this.watcherList) {
      if(watcher.watcherId == watcherId) {
        this.watcherForModal = watcher;
        break;
      }
    }
  }
}

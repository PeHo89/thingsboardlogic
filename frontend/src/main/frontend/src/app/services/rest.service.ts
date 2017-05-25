import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {Watcher} from "../model/watcher";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Service for calling the REST service of Thingsboardlogic
 */
@Injectable()
export class RestService {

  private loginUrl: string = "http://localhost:8090/login";
  private logoutUrl: string = "http://localhost:8090/logout";
  private deleteAccountUrl: string = "http://localhost:8090/deleteAccount";
  private isLoggedInUrl: string = "http://localhost:8090/isLoggedIn";
  private loadTelemetryKeysUrl: string = "http://localhost:8090/loadTelemetryKeys";
  private saveWatcherUrl: string = "http://localhost:8090/saveWatcher";
  private loadWatcherUrl: string = "http://localhost:8090/loadWatcher";
  private editWatcherUrl: string = "http://localhost:8090/editWatcher";
  private getWatcherListUrl: string = "http://localhost:8090/getWatcherList";
  private startWatcherUrl: string = "http://localhost:8090/startWatcher";
  private stopWatcherUrl: string = "http://localhost:8090/stopWatcher";
  private deleteWatcherUrl: string = "http://localhost:8090/deleteWatcher";

  private email: string = "";

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});


  constructor(private http: Http, private router: Router) {}


  login(email:string, password:string, host:string, port:string):Promise<boolean> {
    let formData = "?email="+email+"&password="+password+"&host="+host+"&port="+port;

    return this.http.get(this.loginUrl+formData).toPromise().then(data => {
      if(data.text() == "loggedIn") {
        this.email = email;
        return true;
      } else {
        return false;
      }
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  logout():Promise<boolean> {
    let formData = "?email="+this.email;

    return this.http.get(this.logoutUrl+formData).toPromise().then(data => {
      if(data.text() == "loggedOut") {
        this.email = "";
        return true;
      } else {
        return false;
      }
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  deleteAccount():Promise<boolean> {
    let formData = "?email="+this.email;

    return this.http.delete(this.deleteAccountUrl+formData).toPromise().then(data => {
      if(data.text() == "accountDeleted") {
        this.email = "";
        return true;
      } else {
        return false;
      }
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  isLoggedIn():Promise<boolean> {
    let formData = "?email="+this.email;

    return this.http.get(this.isLoggedInUrl+formData).toPromise().then(data => {
      return data.text() == "true" && this.email != "";
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  loadTelemetryKeys(sourcedeviceid:string):Promise<string[]> {
    let formData = "?email="+this.email+"&deviceid="+sourcedeviceid;

    return this.http.get(this.loadTelemetryKeysUrl+formData).toPromise().then(data => {
      let sourcetelemetrykeys = data.text().substring(1, data.text().length-1).split(",");
      for(let i = 0; i < sourcetelemetrykeys.length; i++) {
        sourcetelemetrykeys[i] = sourcetelemetrykeys[i].substring(1, sourcetelemetrykeys[i].length-1);
      }
      return sourcetelemetrykeys;
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  saveWatcher(sourcedeviceid:string, sourcetelemetrykeys:string[], booleanlogic:string,  timegranularity:number, targetdeviceid:string, messagetrue:string, messagefalse:string, watchername:string):Promise<boolean> {
    booleanlogic = booleanlogic.replace(/&/g, "and");

    let body = JSON.stringify({'email': this.email, 'sourcedeviceid': sourcedeviceid, 'sourcetelemetrykeys': sourcetelemetrykeys.toString(), 'booleanlogic': booleanlogic, 'timegranularity': timegranularity, 'targetdeviceid': targetdeviceid, 'messagetrue': messagetrue, 'messagefalse': messagefalse, 'watchername': watchername});

    return this.http.post(this.saveWatcherUrl, body, this.options).toPromise().then(data => {
      return data.text() == "watcherSaved";
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  loadWatcher(urlid:string):Promise<Watcher> {
    let formData = "?email="+this.email+"&watcherid="+urlid;

    return this.http.get(this.loadWatcherUrl+formData).toPromise().then(data => {
      return JSON.parse(data.text());
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  editWatcher(watcherid:string, booleanlogic:string,  timegranularity:number, messagetrue:string, messagefalse:string, watchername:string):Promise<boolean> {
    booleanlogic =  booleanlogic.replace(/&/g, "and");

    let body = JSON.stringify({'email': this.email, 'watcherid': watcherid, 'booleanlogic': booleanlogic, 'timegranularity': timegranularity, 'messagetrue': messagetrue, 'messagefalse': messagefalse, 'watchername': watchername});

    return this.http.put(this.editWatcherUrl, body, this.options).toPromise().then(data => {
      return data.text() == "watcherEdited";
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  loadWatcherList():Promise<Watcher[]> {
    let formData = "?email="+this.email;

    return this.http.get(this.getWatcherListUrl+formData).toPromise().then(data => {
      return JSON.parse(data.text());
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  startWatcher(watcherId:string):Promise<boolean> {
    let body = JSON.stringify({'email': this.email, 'watcherid': watcherId});

    return this.http.put(this.startWatcherUrl, body, this.options).toPromise().then(data => {
      return data.text() == "watcherStarted";
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  stopWatcher(watcherId:string):Promise<boolean> {
    let body = JSON.stringify({'email': this.email, 'watcherid': watcherId});

    return this.http.put(this.stopWatcherUrl, body, this.options).toPromise().then(data => {
      return data.text() == "watcherStopped";
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  deleteWatcher(watcherIdToDelete:string):Promise<boolean> {
    let formData = "?email="+this.email+"&watcherid="+watcherIdToDelete;

    return this.http.delete(this.deleteWatcherUrl+formData).toPromise().then(data => {
      return data.text() == "watcherDeleted";
    }, error => {
      this.router.navigate(["error"]);
    }).catch(this.handleError);
  }

  getEmail():Promise<string> {
    return Promise.resolve(this.email);
  }

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

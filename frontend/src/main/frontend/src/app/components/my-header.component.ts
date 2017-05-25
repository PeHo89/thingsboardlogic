import {Component, OnInit} from '@angular/core';
import {RestService} from "../services/rest.service";
import {Router} from "@angular/router";

/**
 * Component for showing header
 */
@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: '../views/header.html',
  styleUrls: ['../styles/header.css']
})
export class HeaderComponent implements OnInit {

  private isloggedin: boolean = false;
  private emailaddress: string = "";


  constructor (private restService: RestService, private router: Router) {}


  ngOnInit() {
    this.restService.isLoggedIn().then(result => {
      if (result == true) {
        this.isloggedin = true;
        this.restService.getEmail().then(result => {
          this.emailaddress = result;
        });
      } else {
        this.isloggedin = false;
        this.emailaddress = "";
      }
    });
  }

  logout() {
    this.restService.logout().then(result => {
      if(result == true) {
        this.router.navigate(["login"]);
      } else {
        this.router.navigate(["error"]);
      }
    });
  }

  deleteAccount() {
    this.restService.deleteAccount().then(result => {
      if(result == true) {
        this.router.navigate(["login"]);
      } else {
        this.router.navigate(["error"]);
      }
    });
  }
}

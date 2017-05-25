import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RestService} from "../services/rest.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";

/**
 * Component for login at Thingsboardlogic
 */
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: '../views/login.html',
  styleUrls: ['../styles/login.css']
})
export class LoginComponent implements OnInit {

  private email: string = "";
  private password: string = "";
  private host: string = "";
  private port: string = "";

  private emailValid: boolean = true;
  private passwordValid: boolean = true;
  private hostValid: boolean = true;
  private portValid: boolean = true;


  constructor (private restService: RestService, private router: Router) {}


  ngOnInit() {
    this.restService.isLoggedIn().then(result => {
      if(result == true) {
        this.router.navigate(["overview"]);
      }
    });
  }

  login(){
    if(this.validateInput()) {
      this.restService.login(this.email, this.password, this.host, this.port).then(result => {
        if (result == true) {
          this.router.navigate(["overview"]);
        } else {
          this.router.navigate(["error"]);
        }
      });
    }
  }

  validateInput():boolean {
    this.validateEmail();
    this.validatePassword();
    this.validateHost();
    this.validatePort();
    return  this.emailValid && this.passwordValid && this.hostValid && this.portValid;
  }

  validateEmail() {
    this.emailValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.email);
  }

  validatePassword() {
    this.passwordValid = this.password.length > 0;
  }

  validateHost() {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    this.hostValid = pattern.test(this.host);
  }

  validatePort() {
    this.portValid = Number(this.port) > 0 && Number(this.port) < 65536;
  }

  resetEmailValid() {
    this.emailValid = true;
  }

  resetPasswordValid() {
    this.passwordValid = true;
  }

  resetHostValid() {
    this.hostValid = true;
  }

  resetPortValid() {
    this.portValid = true;
  }
}

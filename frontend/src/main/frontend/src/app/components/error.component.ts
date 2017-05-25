import {Component} from '@angular/core';
import {Location} from '@angular/common';

/**
 * Component for showing error
 */
@Component({
  moduleId: module.id,
  selector: 'error',
  templateUrl: '../views/error.html',
  styleUrls: ['../styles/error.css']
})
export class ErrorComponent {


  constructor(private location: Location) {}


  /*backClicked() {
    this.location.back();
  }*/
}

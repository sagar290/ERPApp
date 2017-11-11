import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-land',
  templateUrl: 'land.html',
})
export class LandPage {
  parms: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  stm() {
    this.parms = 'stm';
    this.navCtrl.push(LoginPage, this.parms);
  }

  dff() {
    this.parms = 'dff';
    this.navCtrl.push(LoginPage, this.parms);
  }

}

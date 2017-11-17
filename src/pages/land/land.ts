import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-land',
  templateUrl: 'land.html',
})
export class LandPage {
  parms: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('token').then((val) => {
      if (val !== null) {
        this.navCtrl.setRoot(HomePage, val);
        // console.log(val);
      }
    });
  }

  stm() {
    this.parms = 's/tm';
    this.navCtrl.push(LoginPage, this.parms);
  }

  dff() {
    this.parms = 'DFF';
    this.navCtrl.push(LoginPage, this.parms);
  }

}

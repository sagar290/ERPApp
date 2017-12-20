import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashBoardPage } from '../dash-board/dash-board';
import { TrainingPage } from '../training/training';
import { ArchivePage } from '../archive/archive';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  token: any;
  isLogIn: boolean;
  constructor(public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.isLogIn = true;
  }

  ionViewDidLoad() {
     // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      this.token = val;
      console.log(val);
    });
  }

  dashBoard() {
    this.navCtrl.setRoot(DashBoardPage, this.token,  {animate: true, direction: 'forward'});
  }

  training() {
    this.navCtrl.setRoot(TrainingPage, this.token,  {animate: true, direction: 'forward'});
  }

  archive() {
    this.navCtrl.setRoot(ArchivePage, this.token,  {animate: true, direction: 'back'});
  }


}

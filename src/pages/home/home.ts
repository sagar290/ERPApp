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
  constructor(public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      this.token = val;
      console.log(val);
    });
  }

  dashBoard() {
    this.navCtrl.push(DashBoardPage, this.token);
  }

  training() {
    this.navCtrl.push(TrainingPage, this.token);
  }

  archive() {
    this.navCtrl.push(ArchivePage, this.token);
  }


}

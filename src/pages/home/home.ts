import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashBoardPage } from '../dash-board/dash-board';
import { TrainingPage } from '../training/training';
import { ArchivePage } from '../archive/archive';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  dashBoard() {
    this.navCtrl.push(DashBoardPage);
  }

  training() {
    this.navCtrl.push(TrainingPage);
  }

  archive() {
    this.navCtrl.push(ArchivePage);
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainingContentPage } from '../training-content/training-content';
import { DashBoardPage } from '../dash-board/dash-board';
// import { TrainingPage } from '../training/training';
import { ArchivePage } from '../archive/archive';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
  loadProgress: number;
  items: any;
  type: any;
  token: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.data;

  }

  ionViewDidLoad() {
    this.loadProgress = 50;
    if (this.type == "DFF") {
      this.items = [
        {
          title: 'Basic Merchandising',
          desc: 'WHAT IS MERCHANDISING Main video',
          video: '',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        }
      ];
    } else {
      
    }
    
  }

  TrainingPage() {
    this.navCtrl.push(TrainingContentPage);
  }

  dashBoard() {
    this.navCtrl.setRoot(DashBoardPage, this.type, {animate: true, direction: 'forward'});
  }



  archive() {
    this.navCtrl.setRoot(ArchivePage, this.type, {animate: true, direction: 'forward'});
  }
  home() {
    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }

  letter(word: string) {
    var str     = word;
    var matches = str.match(/\b(\w)/g);              // ['J','S','O','N']
    var acronym = matches[0];  
    return acronym;
  }
}

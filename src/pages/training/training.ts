import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainingContentPage } from '../training-content/training-content';


@IonicPage()
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
  loadProgress: number;
  items: any;
  type: any;
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

}

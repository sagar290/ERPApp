import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from "../../model/content.model";
import { ContentPage } from '../content/content';
import { DashBoardPage } from '../dash-board/dash-board';
import { TrainingPage } from '../training/training';
import { HomePage } from '../home/home';
// import { ArchivePage } from '../archive/archive';

@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {
  items: any;
  type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.data;
  }

  ionViewDidLoad() {
    if (this.type == 'DFF') {
      this.items = [
        {
          title: 'Taaza',
          desc: '<img src="assets/imgs/taza.jpg" /> <br> <img src="assets/imgs/taza2.jpg" />  ',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/taza.jpg'
        },
        {
          title: 'Vim',
          desc: '<img src="assets/imgs/vim.jpg" />',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/vim.jpg'
        },
        {
          title: 'Dove',
          desc: '<img src="assets/imgs/dove.jpg" />',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/dove.jpg'
        },
        {
          title: 'Clear',
          desc: '<img src="assets/imgs/clear.png" />',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/clear.png'
        }
      ];
    } else {
      this.items = [
        {
          title: 'Tracking Format',
          desc: '',
          video: '',
          edUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqdlrXOfcyBaqfvI79jHJu2_uLxphc7dBOuoLLOjiT5pPHspODJeonbZLsWavZVYB7E1yhXZgpG3Z_/pubhtml?widget=true&amp;headers=false/preview',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/taza.jpg'
        },
        {
          title: 'Useful Learning Module_Video Link',
          desc: ' hi ',
          edUrl: '',
          video: 'https://www.youtube.com/embed/qp0HIF3SfI4',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/taza.jpg'
        }
      ];
    }
    
  }

  content(item: Content) {
    this.navCtrl.push(ContentPage, {item});
  }

  dashBoard() {
    this.navCtrl.push(DashBoardPage, this.type);
  }

  training() {
    this.navCtrl.push(TrainingPage, this.type);
  }

  home() {
    this.navCtrl.setRoot(HomePage);
  }



}

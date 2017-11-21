import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content';
import { Content } from "../../model/content.model";

@IonicPage()
@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {
  items: any;
  dashBoard: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dashBoard = "lr";
    this.items = [
      {
        title: 'New shampoo smells like pizza',
        desc: 'New shampoo smells like pizza',
        region: 'UBL Chittagong',
        date: '22 Dec 2017',
        thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
      },
      {
        title: 'New shampoo smells like pizza',
        desc: 'New shampoo smells like pizza',
        region: 'UBL Chittagong',
        date: '22 Dec 2017',
        thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
      },
      {
        title: 'New shampoo smells like pizza',
        desc: 'New shampoo smells like pizza',
        region: 'UBL Chittagong',
        date: '22 Dec 2017',
        thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
      },
      {
        title: 'New shampoo smells like pizza',
        desc: 'New shampoo smells like pizza',
        region: 'UBL Chittagong',
        date: '22 Dec 2017',
        thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
      },
      {
        title: 'New shampoo smells like pizza',
        desc: 'New shampoo smells like pizza',
        region: 'UBL Chittagong',
        date: '22 Dec 2017',
        thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
      },
    ];
  }


  ionViewDidLoad() {
    this.dashBoard = "lr";
  }

  content(item: Content) {
    this.navCtrl.push(ContentPage, {item});
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from "../../model/content.model";
import { ContentPage } from '../content/content';

@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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

  content(item: Content) {
    this.navCtrl.push(ContentPage, {item});
  }

}

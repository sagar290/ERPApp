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
        },
        {
          title: 'New shampoo smells like pizza',
          desc: 'New shampoo smells like pizza',
          region: 'UBL Chittagong',
          date: '22 Dec 2017',
          thumbnail: 'https://api.adorable.io/avatars/121/abott@adorable.png'
        },
      ];
    } else {
      this.items = [
        {
          title: 'Tracking Format',
          desc: '<a href="assets/TrackingFormat.xls" > TrackingFormat</a>',
          video: '',
          region: '',
          date: '22 Dec 2017',
          thumbnail: 'assets/imgs/taza.jpg'
        },
        {
          title: 'Useful Learning Module_Video Link',
          desc: ' hi ',
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

}

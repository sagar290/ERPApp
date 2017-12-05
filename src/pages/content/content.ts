import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  data: any;
  URL: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer) {
    this.data = this.navParams.data.item;
    
    this.domSanitizer.bypassSecurityTrustResourceUrl(this.data.edUrl);
    // this.URL = "https://h5p.org/h5p/embed/151929";
    // console.log(this.domSanitizer);
  }

  ionViewDidLoad() {
    
    
  }

}

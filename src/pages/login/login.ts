import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data.toUpperCase();
    console.log(this.title);
    
  }


  signUp() {
    this.navCtrl.push(SignupPage);
  }
 
}

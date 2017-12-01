import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { LandPage } from '../land/land';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  title: any;
  empID: string;
  pass: string;
  loading: any;
  isLogIn: boolean;
  constructor(private menu: MenuController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    private storage: Storage) {
    this.title = navParams.data;

    
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
    this.storage.get('token').then((val) => {
      if (val !== null) {
        this.navCtrl.setRoot(HomePage, val);
        // console.log(val);
      }
    });
  }

  logIn() {
    let credentials = {
        empID: this.empID,
        pass: this.pass
    };
    this.auth.login(credentials, this.title);
    this.isLogIn = true;
    this.navCtrl.push(LandPage);
  }


  signUp() {
    this.navCtrl.push(SignupPage);
  }
 
}

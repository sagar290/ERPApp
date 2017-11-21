import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandPage } from '../pages/land/land';
import { HttpModule} from "@angular/http";
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';
import { NavController } from 'ionic-angular';
// import { Http } from '@angular/http/src/http';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LandPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, httMudule: HttpModule,public menuCtrl: MenuController, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }
  logOut() {
    this.storage.set('token', '');
    this.rootPage = LandPage;
  }

}


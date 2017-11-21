import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandPage } from '../pages/land/land';
import { HttpModule} from "@angular/http";
// import { Http } from '@angular/http/src/http';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LandPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, httMudule: HttpModule) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


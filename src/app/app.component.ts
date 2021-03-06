import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandPage } from '../pages/land/land';
import { HttpModule} from "@angular/http";
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';
import { DashBoardPage } from '../pages/dash-board/dash-board';
import { TrainingPage } from '../pages/training/training';
import { ArchivePage } from '../pages/archive/archive';
// import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LandPage;
  pages: any;
  isLogIn: boolean;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, httMudule: HttpModule,public menuCtrl: MenuController, private storage: Storage) {
    
    this.isLogIn = true;
    this.storage.get('token').then((val) => {
      if (val == null) {
        this.isLogIn = false;
        console.log(this.isLogIn);
      }
    });

    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });

    

    this.pages = [
      {
        title: 'Dash Board', 
        component: DashBoardPage,
        img: 'assets/imgs/das-menu.png'
      },
      {
        title: 'Trainning', 
        component: TrainingPage,
        img: 'assets/imgs/training-menu.png'
      },
      {
        title: 'Archive', 
        component: ArchivePage,
        img: 'assets/imgs/archive-menu.png'
      },
      {
        title: 'Logout', 
        component: null,
        img: 'assets/imgs/logout.png'
      },
      
    ];
  }

openPage(page) {
    if(page.component) {
        this.nav.push(page.component);
    } else {
        // Since the component is null, this is the logout option
        console.log('logout');

        // logout logic
        this.storage.set('token', null);
        this.isLogIn = false;
        // redirect to home
        this.nav.setRoot(LandPage);
    }
}

  

  openMenu() {
    this.menuCtrl.open();
  }
  
  logOut() {
    this.storage.set('token', '');
    
  }

}


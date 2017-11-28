import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LandPage } from '../pages/land/land';
import { DashBoardPage } from '../pages/dash-board/dash-board';
import { ContentPage } from '../pages/content/content';
import { TrainingPage } from '../pages/training/training';
import { ArchivePage } from '../pages/archive/archive';

import { AuthProvider } from '../providers/auth/auth';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { TrainingContentPage } from '../pages/training-content/training-content';
import { QuizPage } from '../pages/quiz/quiz';
import { DataProvider } from '../providers/data/data';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SanitizePipe } from '../pipes/sanitize/sanitize';
// import { NavController } from 'ionic-angular';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandPage,
    LoginPage,
    SignupPage,
    DashBoardPage,
    ContentPage,
    ArchivePage,
    TrainingPage,
    ProgressBarComponent,
    TrainingContentPage,
    QuizPage,
    FlashCardComponent,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandPage,
    LoginPage,
    SignupPage,
    DashBoardPage,
    ContentPage,
    ArchivePage,
    TrainingPage,
    TrainingContentPage,
    QuizPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    IonicStorageModule,
    DataProvider,
    HttpModule,
    Http,
    HttpClientModule,
    
  ]
})
export class AppModule {}

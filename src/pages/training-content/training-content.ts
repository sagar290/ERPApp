import { Component } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
// import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-training-content',
  templateUrl: 'training-content.html',
})
export class TrainingContentPage {
  training: any;
  lessons: any;
  vId: any;
  index: any; 
  videoUrl: SafeResourceUrl;
  quizlist: any;
  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    // this.data.load().then((data) => {
    //   console.log(data);
    // });
    this.training = 'videos';
    this.vId = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xMrjiGDefXY');

  }

  ionViewDidLoad() {
    this.lessons = [
      {
        title: 'Lesson 1',
        url: 'https://www.youtube.com/embed/xMrjiGDefXY',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
      {
        title: 'Taking responsibility',
        url: 'https://www.youtube.com/embed/Ltkmd0KZA8c',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
      {
        title: 'Facts vs Opinion',
        url: 'https://www.youtube.com/embed/QYSBsv20R2c',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
      {
        title: 'Active listening',
        url: 'https://www.youtube.com/embed/aUgzw2xgMe8',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
      {
        title: 'Choose your words',
        url: 'https://www.youtube.com/embed/3nOSQ2ih3do',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
      {
        title: 'Be flexible',
        url: 'https://www.youtube.com/embed/39NZrHGvl5I',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
      {
        title: 'Stand out at first Glance',
        url: 'https://www.youtube.com/embed/OoWBlnVf2B0',
        urlid: 'xMrjiGDefXY',
        desc: '',
        icon: ''
      },
    ];

    this.quizlist = [  
      {
        title: 'quiz 1',
        desc: '',
        progress: '',
        icon: ''
      },  
      {
        title: 'Basic test',
        desc: '',
        progress: '',
        icon: ''
      },  
      {
        title: 'Comunication skill test',
        desc: '',
        progress: '',
        icon: ''
      },  
      {
        title: 'Grammer test',
        desc: '',
        progress: '',
        icon: ''
      },
    ];
    
  }

  videoId(id, $event) {
    this.index = $event;
    this.vId = this.domSanitizer.bypassSecurityTrustResourceUrl(id);
    console.log(this.index);
  }

  goQuiz(data: {title: string, desc: string, progress: string,}) {
    this.navCtrl.push(QuizPage, data);
  }

  letter(word: string) {
    var str     = word;
    var matches = str.match(/\b(\w)/g);              // ['J','S','O','N']
    var acronym = matches[0];  
    return acronym;
  }

}

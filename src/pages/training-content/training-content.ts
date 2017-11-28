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
        desc: ''
      },
    ];

    this.quizlist = [  
      {
        title: 'quiz 1',
        desc: '',
        progress: '',
      },  
      {
        title: 'quiz 2',
        desc: '',
        progress: '',
      },  
      {
        title: 'quiz 3',
        desc: '',
        progress: '',
      },  
      {
        title: 'quiz 4',
        desc: '',
        progress: '',
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

}

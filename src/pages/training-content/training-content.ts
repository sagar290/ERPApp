import { Component } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

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
    this.training = 'videos';
    this.vId = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MYt6P5eomRw');

  }

  ionViewDidLoad() {
    this.lessons = [
      {
        title: 'Lesson 1',
        url: 'https://www.youtube.com/embed/MYt6P5eomRw',
        urlid: 'MYt6P5eomRw',
        desc: ''
      },
      {
        title: 'Lesson 2',
        url: 'https://www.youtube.com/embed/M-XsFK-cZSg',
        urlid: 'M-XsFK-cZSg',
        desc: ''
      },
      {
        title: 'Lesson 3',
        url: 'https://www.youtube.com/embed/GaugKUhQHlI',
        urlid: 'GaugKUhQHlI',
        desc: ''
      },
      {
        title: 'Lesson 4',
        url: 'https://www.youtube.com/embed/ixwIWxhIrgg',
        urlid: 'ixwIWxhIrgg',
        desc: ''
      },
      {
        title: 'Lesson 5',
        url: 'https://www.youtube.com/embed/CBoX1FbNSI',
        urlid: 'CBoX1FbNSI',
        desc: ''
      },
      {
        title: 'Lesson 6',
        url: 'https://www.youtube.com/embed/IZYaPXNXJbw',
        urlid: 'IZYaPXNXJbw',
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

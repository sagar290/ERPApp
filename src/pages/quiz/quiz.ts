import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  
  @ViewChild('slides') slides: any;
  
     hasAnswered: boolean = false;
     score: number = 0;
  
     slideOptions: any;
     questions: any;
  
     constructor(public navCtrl: NavController, public dataService: DataProvider) {

      this.slides.lockSwipes(true);
      
             this.dataService.load().then((data) => {
      
                 data.map((question) => {
      
                     let originalOrder = question.answers;
                     question.answers = this.randomizeAnswers(originalOrder);
                     return question;
      
                 });    
      
                 this.questions = data;
      
             });
     }
  

  
     nextSlide(){
         this.slides.lockSwipes(false);
         this.slides.slideNext();
         this.slides.lockSwipes(true);
     }
  
     selectAnswer(answer, question){
  
         this.hasAnswered = true;
         answer.selected = true;
         question.flashCardFlipped = true;
  
         if(answer.correct){
             this.score++;
         }
  
         setTimeout(() => {
             this.hasAnswered = false;
             this.nextSlide();
             answer.selected = false;
             question.flashCardFlipped = false;
         }, 3000);
     }
  
     randomizeAnswers(rawAnswers: any[]): any[] {
  
         for (let i = rawAnswers.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
             let temp = rawAnswers[i];
             rawAnswers[i] = rawAnswers[j];
             rawAnswers[j] = temp;
         }
  
         return rawAnswers;
  
     }
  
     restartQuiz() {
         this.score = 0;
         this.slides.lockSwipes(false);
         this.slides.slideTo(1, 1000);
         this.slides.lockSwipes(true);
     }
 }
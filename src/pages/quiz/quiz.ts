import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
// import { Http } from '@angular/http';

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
     data: any;
  
     constructor(public navCtrl: NavController) {

    //   this.slides.lockSwipes(true);
      
        this.questions = [
            
            {
                "flashCardFront": "<img src='assets/imgs/helicopter.png' />",
                "flashCardBack": "Helicopter",
                "flashCardFlipped": false,
                "questionText": "What is this?",
                "answers": [
                    {"answer": "Helicopter", "correct": true, "selected": false},
                    {"answer": "Plane", "correct": false, "selected": false},
                    {"answer": "Truck", "correct": false, "selected": false}
                ]
            },
            {
                "flashCardFront": "<img src='assets/imgs/plane.png' />",
                "flashCardBack": "Plane",
                "flashCardFlipped": false,
                "questionText": "What is this?",
                "answers": [
                    {"answer": "Helicopter", "correct": false, "selected": false},
                    {"answer": "Plane", "correct": true, "selected": false},
                    {"answer": "Truck", "correct": false, "selected": false}
                ]
            },
            {
                "flashCardFront": "<img src='assets/imgs/truck.png' />",
                "flashCardBack": "Truck",
                "flashCardFlipped": false,
                "questionText": "What is this?",
                "answers": [
                    {"answer": "Helicopter", "correct": false, "selected": false},
                    {"answer": "Plane", "correct": false, "selected": false},
                    {"answer": "Truck", "correct": true, "selected": false}
                ]
            }
            
        ]
     }

     ionViewDidLoad() { this.slides.lockSwipes(true) }
  
    //  load(){
        
    //            if(this.data){
    //                return Promise.resolve(this.data);
    //            }
        
    //            return new Promise(resolve => {
        
    //                this.http.get('assets/data/questions.json').map(res => res.json()).subscribe(data => {
    //                    this.data = data.questions;
    //                    resolve(this.data);
    //                });
        
    //            });
        
    //        }
  
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
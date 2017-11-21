import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingContentPage } from './training-content';

@NgModule({
  declarations: [
    TrainingContentPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingContentPage),
  ],
})
export class TrainingContentPageModule {}

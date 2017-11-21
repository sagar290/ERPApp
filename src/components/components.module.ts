import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { FlashCardComponent } from './flash-card/flash-card';
@NgModule({
	declarations: [ProgressBarComponent,
    FlashCardComponent],
	imports: [],
	exports: [ProgressBarComponent,
    FlashCardComponent]
})
export class ComponentsModule {}

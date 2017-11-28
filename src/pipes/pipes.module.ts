import { NgModule } from '@angular/core';
import { SanitizePipe } from './sanitize/sanitize';
@NgModule({
	declarations: [SanitizePipe],
	imports: [],
	exports: [SanitizePipe]
})
export class PipesModule {}

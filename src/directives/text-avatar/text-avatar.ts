import { Directive } from '@angular/core';

/**
 * Generated class for the TextAvatarDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[text-avatar]' // Attribute selector
})
export class TextAvatarDirective {

  constructor() {
    console.log('Hello TextAvatarDirective Directive');
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {

  }
  transform(value: string, args) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

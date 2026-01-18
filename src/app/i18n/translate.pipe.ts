import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({ 
  name: 't',
  pure: false // Allow pipe to re-evaluate when dictionary changes
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: string): string {
    return this.translate.translate(key);
  }
}

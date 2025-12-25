import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private dict: Record<string, string> = {};

  use(dictionary: Record<string, string>): void {
    this.dict = dictionary || {};
  }

  translate(key: string): string {
    return this.dict[key] ?? key;
  }
}

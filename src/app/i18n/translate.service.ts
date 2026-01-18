import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

export type Language = 'hu' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private pageDict: Record<string, string> = {};
  private globalDict: Record<string, string> = {};
  
  // Current language signal for reactive UI
  public currentLang = signal<Language>('hu');
  
  // Event emitter for components to reload their dictionaries
  public onLanguageChange = new Subject<Language>();

  use(dictionary: Record<string, string>): void {
    this.pageDict = dictionary || {};
  }

  useGlobal(dictionary: Record<string, string>): void {
    this.globalDict = dictionary || {};
  }

  translate(key: string): string {
    return this.pageDict[key] ?? this.globalDict[key] ?? key;
  }

  setLanguage(lang: Language): void {
    if (this.currentLang() !== lang) {
      this.currentLang.set(lang);
      this.onLanguageChange.next(lang);
    }
  }
}

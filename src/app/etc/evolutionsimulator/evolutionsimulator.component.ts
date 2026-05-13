import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslateService, Language } from '../../i18n/translate.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { EN_EVOLUTION_SIMULATOR } from './i18n/en';
import { HU_EVOLUTION_SIMULATOR } from './i18n/hu';

@Component({
  selector: 'app-evolutionsimulator',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './evolutionsimulator.component.html',
  styleUrls: ['./evolutionsimulator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvolutionsimulatorComponent implements OnInit, OnDestroy {
  private langSub!: Subscription;

  constructor(private i18n: TranslateService) {}

  ngOnInit() {
    this.updateLanguage(this.i18n.currentLang());
    this.langSub = this.i18n.onLanguageChange.subscribe(lang => {
      this.updateLanguage(lang);
    });
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private updateLanguage(lang: Language) {
    if (lang === 'en') {
      this.i18n.use(EN_EVOLUTION_SIMULATOR);
    } else {
      this.i18n.use(HU_EVOLUTION_SIMULATOR);
    }
  }
}

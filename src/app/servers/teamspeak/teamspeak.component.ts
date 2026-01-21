import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, Language } from '../../i18n/translate.service';
import { HU_TEAMSPEAK } from './i18n/hu';
import { EN_TEAMSPEAK } from './i18n/en';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teamspeak',
  standalone: false,
  templateUrl: './teamspeak.component.html',
  styleUrls: [
    './styles/teamspeak.component.scss',
    './styles/teamspeak.profile.scss',
    './styles/teamspeak.feed.scss',
    './styles/teamspeak.guide.scss',
    './styles/teamspeak.responsive.scss'
  ]
})
export class TeamspeakComponent implements OnInit, OnDestroy {
  isCopied = false;
  serverAddress = 'ts.space-cube.eu';
  private langSub!: Subscription;

  constructor(private i18n: TranslateService) {}

  ngOnInit() {
    this.updateLanguage(this.i18n.currentLang());
    this.langSub = this.i18n.onLanguageChange.subscribe(lang => this.updateLanguage(lang));
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private updateLanguage(lang: Language) {
    if (lang === 'en') {
      this.i18n.use(EN_TEAMSPEAK);
    } else {
      this.i18n.use(HU_TEAMSPEAK);
    }
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.serverAddress).then(() => {
      this.isCopied = true;
      setTimeout(() => this.isCopied = false, 2000);
    }).catch(err => console.error('Failed to copy text: ', err));
  }
}

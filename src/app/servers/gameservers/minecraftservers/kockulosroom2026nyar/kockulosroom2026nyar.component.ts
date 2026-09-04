import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService, Language } from '../../../../i18n/translate.service';
import { HU_KOCKULOSROOM_2026NYAR } from './i18n/hu';
import { EN_KOCKULOSROOM_2026NYAR } from './i18n/en';
import { LINKS } from '../../../../config/servers/gameservers/minecraftservers/kockulosroom202526tel/links.config';

@Component({
  selector: 'app-kockulosroom2026nyar',
  standalone: false,
  templateUrl: './kockulosroom2026nyar.component.html',
  styleUrls: [
    '../kockulosroom202526tel/styles/kockulosroom202526tel.component.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.profile.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.feed.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.cards.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.guide.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.modal.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.content.scss',
    '../kockulosroom202526tel/styles/kockulosroom202526tel.responsive.scss',
    './kockulosroom2026nyar.component.scss'
  ]
})
export class Kockulosroom2026nyarComponent implements OnInit, OnDestroy {
  isCopied = false;
  selectedImage: string | null = null;
  isTechnicalSpecsOpen = false;
  serverAddress = 'mc.space-cube.eu';
  links = LINKS;
  private langSub?: Subscription;

  constructor(private i18n: TranslateService) {}

  ngOnInit(): void {
    this.updateLanguage(this.i18n.currentLang());
    this.langSub = this.i18n.onLanguageChange.subscribe(lang => this.updateLanguage(lang));
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  private updateLanguage(lang: Language): void {
    if (lang === 'en') {
      this.i18n.use(EN_KOCKULOSROOM_2026NYAR);
    } else {
      this.i18n.use(HU_KOCKULOSROOM_2026NYAR);
    }
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.serverAddress).then(() => {
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  openImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  scrollToStep5(): void {
    const element = document.getElementById('step-5');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleTechnicalSpecs(): void {
    this.isTechnicalSpecsOpen = !this.isTechnicalSpecsOpen;
  }
}

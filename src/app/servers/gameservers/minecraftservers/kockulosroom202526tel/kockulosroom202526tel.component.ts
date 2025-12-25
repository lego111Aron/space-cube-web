import { Component } from '@angular/core';
import { TranslateService } from '../../../../i18n/translate.service';
import { HU_KOCKULOSROOM_202526TEL } from './i18n/hu';
import { LINKS } from '../../../../config/links.config';

@Component({
  selector: 'app-kockulosroom202526tel',
  standalone: false,
  templateUrl: './kockulosroom202526tel.component.html',
  styleUrls: [
    './styles/kockulosroom202526tel.component.scss',
    './styles/kockulosroom202526tel.modal.scss',
    './styles/kockulosroom202526tel.content.scss',
    './styles/kockulosroom202526tel.profile.scss',
    './styles/kockulosroom202526tel.feed.scss',
    './styles/kockulosroom202526tel.guide.scss',
    './styles/kockulosroom202526tel.cards.scss',
    // Keep responsive overrides last to win the cascade on mobile widths
    './styles/kockulosroom202526tel.responsive.scss'
  ]
})


export class Kockulosroom202526telComponent {
  isCopied = false;
  selectedImage: string | null = null;
  links = LINKS;
  serverAddress = LINKS.serverDomain;

  constructor(private i18n: TranslateService) {
    this.i18n.use(HU_KOCKULOSROOM_202526TEL);
  }

  copyToClipboard(event: MouseEvent): void {
    const serverAddress = 'mc.space-cube.hu';
    navigator.clipboard.writeText(serverAddress).then(() => {
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
      const offsetPosition = elementPosition - 120; // 120px offset a fejléc miatt
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
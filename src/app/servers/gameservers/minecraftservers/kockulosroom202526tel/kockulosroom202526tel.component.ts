import { Component } from '@angular/core';

@Component({
  selector: 'app-kockulosroom202526tel',
  standalone: false,
  templateUrl: './kockulosroom202526tel.component.html',
  styleUrl: './kockulosroom202526tel.component.scss'
})


export class Kockulosroom202526telComponent {
  isCopied = false;
  selectedImage: string | null = null;

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
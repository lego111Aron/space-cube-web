import { Component } from '@angular/core';

@Component({
  selector: 'app-kockulosroom202526tel',
  standalone: false,
  templateUrl: './kockulosroom202526tel.component.html',
  styleUrl: './kockulosroom202526tel.component.scss'
})


export class Kockulosroom202526telComponent {
  isCopied = false;

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


}
import { Component } from '@angular/core';

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
export class TeamspeakComponent {
  isCopied = false;
  serverAddress = 'ts.space-cube.eu';

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.serverAddress).then(() => {
      this.isCopied = true;
      setTimeout(() => this.isCopied = false, 2000);
    }).catch(err => console.error('Failed to copy text: ', err));
  }
}

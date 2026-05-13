import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; // Important for *ngIf
import { TranslateService, Language } from './i18n/translate.service';
import { TranslatePipe } from './i18n/translate.pipe';
import { filter } from 'rxjs/operators';
import { HU_GLOBAL } from './i18n/hu';
import { EN_GLOBAL } from './i18n/en';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true, // It was implicitly standalone or module-based? Let's assume standalone as per file content 
  imports: [RouterOutlet, CommonModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'space-cube-web';
  showLangSelector = true;
  showLoginButton = true;
  userSignal: any;

  constructor(
    public i18n: TranslateService, 
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    // Wire user signal after service is constructed
    this.userSignal = this.auth.currentUserSignal;
    // Initialize global translations
    this.updateGlobalLanguage(this.i18n.currentLang());
    this.i18n.onLanguageChange.subscribe(lang => {
      this.updateGlobalLanguage(lang);
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Hide header on specific routes like 'kockulosroom202526tel'
      // Adjust the check based on your actual route path
      this.showLangSelector = !event.url.includes('kockulosroom202526tel');
      // Hide login button on specific routes
      this.showLoginButton = !event.url.includes('kockulosroom202526tel') && 
                             !event.url.includes('teamspeak') && 
                             !event.url.includes('evolutionsimulator');
    });
  }

  private updateGlobalLanguage(lang: Language) {
    if (lang === 'en') {
      this.i18n.useGlobal(EN_GLOBAL);
    } else {
      this.i18n.useGlobal(HU_GLOBAL);
    }
  }

  toggleLanguage() {
    const newLang = this.i18n.currentLang() === 'hu' ? 'en' : 'hu';
    this.i18n.setLanguage(newLang);
  }

  logout() {
    this.auth.logout();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

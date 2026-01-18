import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, Language } from '../i18n/translate.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { HU_HOME } from './i18n/hu';
import { EN_HOME } from './i18n/en';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  template: `
    <div class="page-container">
        <!-- Right Content Feed -->
        <main class="main-content">
          <div class="profile-card">
            <div class="profile-header">
              <div class="title-container">
                <h1 class="page-title">{{ 'home.title' | t }}</h1>
                <img style="width: 50px; height: 50px;" src="media/space-cube_icon.png" alt="Avatar" class="profile-avatar" />
              </div>
              <p class="page-subtitle" [innerHTML]="'home.subtitle' | t"></p>
            </div>
            
            <div class="info-badge">
              <span class="badge-label">{{ 'home.position.label' | t }}</span>
              <span class="badge-value">{{ 'home.position.value' | t }}</span>
            </div>
          </div>
        </main>
    </div>
  `,
  styles: [`
    .title-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;      
    }

    .page-container {
      position: relative;
      min-height: 100vh;
      padding: 2rem;
      padding-top: 6rem;
      overflow-x: hidden;
    }

    /* Layout */
    .content-wrapper {
      position: relative;
      max-width: 1600px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 2rem;
      align-items: start;
      z-index: 1;
    }

    /* Sidebar / Profile Card */
    .sidebar {
      position: sticky;
      top: 6rem;
    }

    .profile-card {
      background: var(--glass-bg);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      backdrop-filter: blur(24px) saturate(180%);
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 8px 32px var(--shadow-strong, rgba(0,0,0,0.5)), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(var(--brand-primary-rgb), 0.25);
    }

    .profile-header {
      text-align: center;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--separator-color);
      margin-bottom: 1.5rem;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin: 0 0 1rem 0;
      text-shadow: 0 2px 8px rgba(var(--brand-primary-rgb), 0.5);
    }

    .page-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      font-weight: 300;
      margin: 0.5rem 0 0 0;
    }
    
    .info-badge {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 0.5rem;
      padding: 1rem;
      background: linear-gradient(135deg, rgba(var(--brand-primary-rgb), 0.15), rgba(var(--brand-primary-rgb), 0.05));
      border-radius: 12px;
      border: 1px solid rgba(var(--brand-primary-rgb), 0.3);
    }

    .badge-label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .badge-value {
      font-size: 1.1rem;
      color: white;
      font-weight: 700;
    }

    /* Main Content */
    .feed-section {
      background: var(--glass-bg);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      backdrop-filter: blur(24px) saturate(180%);
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 8px 32px var(--shadow-strong, rgba(0,0,0,0.5)), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(var(--brand-primary-rgb), 0.25);
      margin-bottom: 2rem;
    }

    .feed-section:hover {
        transform: translateY(-2px);
        border-color: rgba(var(--brand-primary-rgb), 0.3);
        box-shadow: 
            0 12px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 0 0 1px rgba(var(--brand-primary-rgb), 0.1); 
        transition: all 0.3s ease;
    }

    .feed-title {
      font-size: 2rem;
      color: var(--text-primary);
      margin: 0 0 2rem 0;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--separator-color);
    }

    .glass-content {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        background: rgba(26, 31, 58, 0.4);
        -webkit-backdrop-filter: blur(24px) saturate(180%);
        backdrop-filter: blur(24px) saturate(180%);
        border-radius: 24px;
        padding: 3rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(var(--brand-primary-rgb), 0.3);
    }

    .glass-content p {
      color: var(--text-primary);
      font-size: 1.1rem;
      line-height: 1.6;
    }

    /* Responsive */
    @media (max-width: 968px) {
      .content-wrapper {
        grid-template-columns: 1fr;
      }
      
      .sidebar {
        position: relative;
        top: 0;
        margin-bottom: 2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  langSub!: Subscription;

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
      this.i18n.use(EN_HOME);
    } else {
      this.i18n.use(HU_HOME);
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="page-container">
      <div class="glass-content login-box">
        <h1 class="glass-title">{{ 'login.title' | t }}</h1>
        <p class="glass-subtitle">{{ 'login.subtitle' | t }}</p>

        <div class="login-actions">
          <button class="login-provider-btn google" (click)="loginGoogle()">
            <img src="media/google.png" alt="Google" class="provider-logo" />
            {{ 'login.google' | t }}
          </button>

          <button class="login-provider-btn microsoft" (click)="loginMicrosoft()">
            <img src="media/microsoft.png" alt="Microsoft" class="provider-logo" />
             {{ 'login.microsoft' | t }}
          </button>

          <button class="login-provider-btn apple" (click)="loginApple()">
            <img src="media/apple.png" alt="Apple" class="provider-logo" />
             {{ 'login.apple' | t }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-box {
      max-width: 480px;
    }

    .login-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }

    .login-provider-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      padding: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;
    }

    .login-provider-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .provider-logo {
      width: 24px;
      height: 24px;
      object-fit: contain;
      border-radius: 4px;
    }

    /* Provider specific colors (optional accents) */
    .google:hover { border-color: #DB4437; }
    .microsoft:hover { border-color: #00A4EF; }
    .apple:hover { border-color: #ffffff; }

    .login-provider-btn:active {
      transform: scale(0.98);
    }
  `]
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  loginGoogle() {
    this.auth.loginWithGoogle();
  }

  loginMicrosoft() {
    this.auth.loginWithMicrosoft();
  }

  loginApple() {
    this.auth.loginWithApple();
  }
}

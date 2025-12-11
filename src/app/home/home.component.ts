import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-container">
      <!-- Animated Wave Background -->
      <div class="wave-background">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>

      <!-- Content -->
      <div class="content">
        <h1 class="title">SpaceCube</h1>
        <p class="subtitle">Főoldal</p>
        <div class="location">
          <span class="icon">📍</span>
          <span>Jelenlegi pozíció: <strong>Főoldal</strong></span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      position: relative;
      min-height: calc(100vh - 3.25rem);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Animated Background - Liquid Puddles */
    .wave-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0.35;
    }

    .wave {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      will-change: transform;
    }

    .wave1 {
      width: 450px;
      height: 450px;
      top: 10%;
      left: 5%;
      background: radial-gradient(
        circle,
        var(--puddle-primary) 0%,
        var(--puddle-primary-mid) 40%,
        transparent 80%
      );
      animation: puddle1 15s ease-in-out infinite;
    }

    .wave2 {
      width: 380px;
      height: 380px;
      top: 15%;
      right: 10%;
      background: radial-gradient(
        circle,
        var(--puddle-secondary) 0%,
        var(--puddle-primary-mid) 40%,
        transparent 80%
      );
      animation: puddle2 12s ease-in-out infinite;
      animation-delay: -3s;
    }

    .wave3 {
      width: 500px;
      height: 500px;
      bottom: 5%;
      left: 15%;
      background: radial-gradient(
        circle,
        var(--puddle-tertiary) 0%,
        var(--puddle-tertiary-mid) 40%,
        transparent 80%
      );
      animation: puddle3 18s ease-in-out infinite;
      animation-delay: -6s;
    }

    /* Puddle animations - they merge and separate */
    @keyframes puddle1 {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(150px, 80px) scale(1.3);
      }
      50% {
        transform: translate(200px, 200px) scale(0.8);
      }
      75% {
        transform: translate(80px, 120px) scale(1.1);
      }
    }

    @keyframes puddle2 {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      20% {
        transform: translate(-100px, 100px) scale(1.2);
      }
      40% {
        transform: translate(-180px, 220px) scale(0.9);
      }
      60% {
        transform: translate(-120px, 150px) scale(1.4);
      }
      80% {
        transform: translate(-50px, 80px) scale(0.85);
      }
    }

    @keyframes puddle3 {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      30% {
        transform: translate(120px, -150px) scale(1.25);
      }
      60% {
        transform: translate(200px, -100px) scale(0.95);
      }
    }

    /* Content Styles - Enhanced Glassmorphism */
    .content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 2rem;
      background: var(--glass-bg);
      border-radius: 24px;
      border: 1px solid var(--glass-border);
      box-shadow: 
        0 8px 32px var(--shadow-strong),
        inset 0 1px 0 var(--glass-highlight);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      max-width: 600px;
      width: 90%;
    }

    .title {
      font-size: 3rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .subtitle {
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
      color: var(--text-secondary);
      font-weight: 400;
    }

    .location {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--highlight-subtle);
      border: 1px solid var(--accent-primary);
      border-radius: 8px;
      color: var(--text-primary);
      font-size: 1rem;
    }

    .icon {
      font-size: 1.25rem;
    }

    strong {
      color: var(--accent-primary);
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .content {
        padding: 1.5rem;
      }
    }
  `]
})
export class HomeComponent {}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { TranslateService, Language } from '../../i18n/translate.service';
import { EN_ARON_PALFI } from './i18n/en';
import { HU_ARON_PALFI } from './i18n/hu';
import { Subscription } from 'rxjs';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-aron-palfi',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './aron-palfi.component.html',
  styleUrls: ['./styles/aron-palfi.component.scss']
})
export class AronPalfiComponent implements OnInit, OnDestroy {
  private langSubscription?: Subscription;
  activeSection: string = 'about';
  currentLanguage: Language = 'en';
  
  skillCategories: SkillCategory[] = [
    {
      title: 'skills.frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'SCSS/SASS', level: 90 }
      ]
    },
    {
      title: 'skills.backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'skills.database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'skills.tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Webpack', level: 85 },
        { name: 'Jest/Testing', level: 80 }
      ]
    }
  ];

  stats = [
    { value: 8, label: 'timeline.years', suffix: '+' },
    { value: 50, label: 'timeline.projects', suffix: '+' },
    { value: 20, label: 'timeline.technologies', suffix: '+' }
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.updateLanguage(this.translateService.currentLang());
    
    this.langSubscription = this.translateService.onLanguageChange.subscribe(
      (lang: Language) => {
        this.updateLanguage(lang);
      }
    );

    // Intersection Observer for scroll animations
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      setTimeout(() => {
        document.querySelectorAll('.resume-section').forEach((section) => {
          observer.observe(section);
        });
      }, 100);
    }
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  private updateLanguage(lang: Language): void {
    this.currentLanguage = lang;
    if (lang === 'en') {
      this.translateService.use(EN_ARON_PALFI);
    } else {
      this.translateService.use(HU_ARON_PALFI);
    }
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadPDF(): void {
    // Placeholder for PDF download functionality
    alert('PDF download functionality would be implemented here');
  }

  toggleSkillCategory(category: SkillCategory): void {
    // Future implementation for collapsible skill sections
  }

  getSkillWidth(level: number): string {
    return `${level}%`;
  }

  setLanguage(lang: Language): void {
    this.translateService.setLanguage(lang);
  }
}

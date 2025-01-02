import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations = new BehaviorSubject<any>({});
  private currentLanguage = new BehaviorSubject<string>('en');

  constructor(private http: HttpClient) {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.setLanguage(storedLanguage); // Proporciona la sección aquí
  }
  

  get currentTranslations() {
    return this.translations.asObservable();
  }

  get language() {
    return this.currentLanguage.asObservable();
  }

  setLanguage(language: string): void {
    this.http.get(`/assets/i18n/translations.json`).subscribe({
      next: (data: any) => {
        if (data) {
          const translationData = data[language] || {};
          this.translations.next(translationData);
          this.currentLanguage.next(language);
          localStorage.setItem('selectedLanguage', language);
          window.dispatchEvent(new CustomEvent('languageChange', { detail: { language } }));
        } else {
          console.error(`No data found for language: ${language}`);
          this.translations.next({});
        }
      },
      error: (err) => {
        console.error(`Error loading translations.json:`, err);
        this.translations.next({});
      }
    });
  }
  
  
  
}

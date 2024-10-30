import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  getUserLanguage(): string {
    // Get browser language
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang.split('-')[0].toLowerCase(); // Returns 'de' for German, 'cs' for Czech
  }

  setUserLanguage(language: string) {
    localStorage.setItem('userLanguage', language);
  }
}


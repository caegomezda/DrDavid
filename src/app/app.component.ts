import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-david-castano';
  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translationService.setLanguage(storedLanguage);
  }
}

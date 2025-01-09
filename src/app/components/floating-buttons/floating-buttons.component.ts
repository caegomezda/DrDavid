import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-floating-buttons',
  templateUrl: './floating-buttons.component.html',
  styleUrls: ['./floating-buttons.component.scss']
})
export class FloatingButtonsComponent implements OnInit {
  translations: any;

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe(translations => {
      this.translations = translations;
    });
  }
}

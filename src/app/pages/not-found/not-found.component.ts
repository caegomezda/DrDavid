import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  translations: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations :any) => {
      this.translations = translations;
    });
  }
}

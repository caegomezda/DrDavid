import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  translations: any = {};
  menuActive: boolean = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations :any) => {
      this.translations = translations?.header || {};
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  closeMenu() {
    this.menuActive = false; // Cierra el menú
  }
}

import { Component, AfterViewInit  } from '@angular/core';
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

  ngAfterViewInit(): void {
    this.findAndInteractWithElement();
  }

  private findAndInteractWithElement(): void {
    // Encuentra todos los elementos 'span' con al menos una clase
    const elements = document.querySelectorAll('span[class]');

    // Filtra los elementos que contienen el texto deseado
    const targetElement = Array.from(elements).find((el) => {
      const hasAnyClass = el.classList.length > 0; // Verifica que tenga al menos una clase
      const hasText = el.textContent?.trim() === 'Enviar'; // Verifica que el texto sea 'Enviar'
      return hasAnyClass && hasText;
    });

    if (targetElement) {
      console.log('Elemento encontrado:', targetElement);
      // Aquí puedes realizar acciones adicionales
      // (targetElement as HTMLElement).click(); // Simular clic si es necesario
      (targetElement as HTMLElement).click(); // Simular clic
    } else {
      console.log('Elemento no encontrado.');
    }
  }
}

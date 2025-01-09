import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  translations: any = {};
  services: any[] = [];
  activeIndex: number | null = null;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations :any) => {
      this.translations = translations;

      if (translations?.services && Array.isArray(translations.services)) {
        this.services = translations.services.map((service: any, index: number) => ({
          ...service,
          ...this.defaultServices[index],
        }));
      } else {
        console.warn('No se encontraron servicios en las traducciones.');
        this.services = this.defaultServices;
      }
    });
  }

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  defaultServices = [
    { id: 'hypertension', backgroundColor: '#e0f7fa', image: null },
    { id: 'copd', backgroundColor: '#e8f5e9', image: 'assets/images/silueta-de-pulmones.png' },
    { id: 'diabetes', backgroundColor: '#ede7f6', image: 'assets/images/diabetes-test.png' },
    { id: 'ckd', backgroundColor: '#e3f2fd', image: 'assets/images/kidney.png' },
    { id: 'migraine', backgroundColor: '#fce4ec', image: null },
    { id: 'preventive-checkups', backgroundColor: '#f3e5f5', image: null },
    { id: 'gastrointestinal-disorders', backgroundColor: '#fffde7', image: 'assets/images/colon.png' },
    { id: 'travelers-fever', backgroundColor: '#fbe9e7', image: null },
    { id: 'cardiovascular-risk', backgroundColor: '#efebe9', image: null },
  ];
}

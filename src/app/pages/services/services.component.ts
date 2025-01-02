import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  translations: any = {};
  services: any[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe({
      next: (translations) => {
        this.translations = translations;

        // Verifica que los servicios existen y son un array
        if (translations?.services && Array.isArray(translations.services)) {
          this.services = translations.services.map((service: any, index: number) => ({
            ...service,
            ...this.defaultServices[index]
          }));
        } else {
          console.warn('No se encontraron servicios en las traducciones.');
          this.services = this.defaultServices;
        }
      },
      error: (err) => {
        console.error('Error al obtener traducciones:', err);
        this.services = this.defaultServices;
      }
    });
  }

  defaultServices = [
    { id: 'hypertension', backgroundColor: '#b9dcef', icon: 'fas fa-heartbeat' },
    { id: 'copd', backgroundColor: '#ffffff', image: 'assets/images/silueta-de-pulmones.png' },
    { id: 'diabetes', backgroundColor: '#b9dcef', image: 'assets/images/diabetes-test.png' },
    { id: 'ckd', backgroundColor: '#ffffff', image: 'assets/images/kidney.png' },
    { id: 'migraine', backgroundColor: '#b9dcef', icon: 'fas fa-head-side-virus' },
    { id: 'preventive-checkups', backgroundColor: '#ffffff', icon: 'fas fa-stethoscope' },
    { id: 'gastrointestinal-disorders', backgroundColor: '#b9dcef', image: 'assets/images/colon.png' },
    { id: 'cardiovascular-risk', backgroundColor: '#ffffff', icon: 'fas fa-heart' },
    { id: 'travelers-fever', backgroundColor: '#b9dcef', icon: 'fas fa-route' },
  ];
}

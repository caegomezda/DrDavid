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
    { id: 'hypertension', backgroundColor: '#9df2c7', icon: 'fas fa-heartbeat' },
    { id: 'copd', backgroundColor: '#ffb3b0', image: 'assets/images/silueta-de-pulmones.png' },
    { id: 'diabetes', backgroundColor: '#ffe066', image: 'assets/images/diabetes-test.png' },
    { id: 'ckd', backgroundColor: '#81e5f7', image: 'assets/images/kidney.png' },
    { id: 'migraine', backgroundColor: '#ffcc99', icon: 'fas fa-head-side-virus' },
    { id: 'preventive-checkups', backgroundColor: '#b3e5cc', icon: 'fas fa-stethoscope' },
    { id: 'gastrointestinal-disorders', backgroundColor: '#99e5a1', image: 'assets/images/colon.png' },
    { id: 'cardiovascular-risk', backgroundColor: '#ff6666', icon: 'fas fa-heart' },
    { id: 'travelers-fever', backgroundColor: '#fff8a6', icon: 'fas fa-route' }
  ];
}

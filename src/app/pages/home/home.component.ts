import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  translations: any = {};
  services: any[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe({
      next: (translations :any) => {
        this.translations = translations;

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
    { id: 'hypertension', backgroundColor: '#ffffff', icon: 'fas fa-heartbeat' },
    { id: 'copd', backgroundColor: '#b9dcef', image: 'assets/images/silueta-de-pulmones.png' },
    { id: 'diabetes', backgroundColor: '#ffffff', image: 'assets/images/diabetes-test.png' },
    { id: 'ckd', backgroundColor: '#b9dcef', image: 'assets/images/kidney.png' },
    { id: 'migraine', backgroundColor: '#b9dcef', icon: 'fas fa-head-side-virus' },
    { id: 'preventive-checkups', backgroundColor: '#ffffff', icon: 'fas fa-stethoscope' },
    { id: 'gastrointestinal-disorders', backgroundColor: '#b9dcef', image: 'assets/images/colon.png' },
    { id: 'cardiovascular-risk', backgroundColor: '#ffffff', icon: 'fas fa-heart' },
    { id: 'travelers-fever', backgroundColor: '#b9dcef', icon: 'fas fa-route' },
      
  ];
}

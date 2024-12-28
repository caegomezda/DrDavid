import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Services Data
  services = [
    {
      id: 'hypertension',
      backgroundColor: '#d9f2e6', // Verde menta para transmitir calma y salud
      icon: 'fas fa-heartbeat',
      title: 'Hypertension',
      description: 'Hypertension control and management.',
    },
    {
      id: 'copd',
      backgroundColor: '#ffe4e1', // Rosa claro que transmite suavidad y cuidado
      // icon: 'fas fa-wind',
      image: 'assets/images/silueta-de-pulmones.png', // Ruta del ícono personalizado

      title: 'COPD (Chronic Obstructive Pulmonary Disease)',
      description: 'Treatment and management of COPD.',
    },
    {
      id: 'diabetes',
      backgroundColor: '#fff3cd', // Amarillo claro que transmite optimismo y energía
      // icon: 'fas fa-prescription-bottle',
      image: 'assets/images/diabetes-test.png', // Ruta del ícono personalizado
      title: 'Diabetes Mellitus',
      description: 'Type 2 Diabetes treatment and management.',
    },
    {
      id: 'ckd',
      backgroundColor: '#e0f7fa', // Azul claro relacionado con limpieza y tranquilidad
      // icon: 'fas fa-flask',
      image: 'assets/images/kidney.png', // Ruta del ícono personalizado
      title: 'Chronic Kidney Disease (CKD)',
      description: 'Control and follow-up for Chronic Kidney Disease.',
    },
    {
      id: 'migraine',
      backgroundColor: '#ffebcd', // Beige claro que transmite suavidad y calma
      icon: 'fas fa-head-side-virus',
      title: 'Migraine',
      description: 'Migraine treatment and management.',
    },
    {
      id: 'travelers-fever',
      backgroundColor: '#faf4e1', // Amarillo crema que inspira confianza y cercanía
      icon: 'fas fa-route',
      title: "Traveler's Fever",
      description: 'Evaluation and follow-up for traveler’s fever (Tropical Infectious diseases).',
    },
    {
      id: 'cardiovascular-risk',
      backgroundColor: '#cce7ff', // Azul cielo que inspira tranquilidad y salud
      icon: 'fas fa-heart',
      title: 'Cardiovascular Risk Assessment',
      description: 'Cardiovascular risk follow-up.',
    },
    {
      id: 'gastrointestinal-disorders',
      backgroundColor: '#d8f3dc', // Verde claro relacionado con bienestar y frescura
      // icon: 'fas fa-vialfas fa-notes-medical',
      image: 'assets/images/colon.png', // Ruta del ícono personalizado
      title: 'Gastrointestinal Disorders',
      description: 'Gastrointestinal and hepatic conditions and disorders.',
    },
    
  ];
}

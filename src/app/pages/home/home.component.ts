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
      backgroundColor: '#9df2c7', // Verde menta más vibrante
      icon: 'fas fa-heartbeat',
      title: 'Hypertension',
      description: 'Hypertension control and management.',
    },
    {
      id: 'copd',
      backgroundColor: '#ffb3b0', // Rosa más vibrante para cuidado respiratorio
      image: 'assets/images/silueta-de-pulmones.png', // Ruta del ícono personalizado
      title: 'COPD (Chronic Obstructive Pulmonary Disease)',
      description: 'Treatment and management of COPD.',
    },
    {
      id: 'diabetes',
      backgroundColor: '#ffe066', // Amarillo vibrante para energía y optimismo
      image: 'assets/images/diabetes-test.png', // Ruta del ícono personalizado
      title: 'Diabetes Mellitus',
      description: 'Type 2 Diabetes treatment and management.',
    },
    {
      id: 'ckd',
      backgroundColor: '#81e5f7', // Azul más brillante para tranquilidad y limpieza
      image: 'assets/images/kidney.png', // Ruta del ícono personalizado
      title: 'Chronic Kidney Disease (CKD)',
      description: 'Control and follow-up for Chronic Kidney Disease.',
    },
    {
      id: 'migraine',
      backgroundColor: '#ffcc99', // Beige más vibrante para calma
      icon: 'fas fa-head-side-virus',
      title: 'Migraine',
      description: 'Migraine treatment and management.',
    },
    {
      id: 'travelers-fever',
      backgroundColor: '#fff8a6', // Amarillo crema más brillante para confianza
      icon: 'fas fa-route',
      title: "Traveler's Fever",
      description: 'Evaluation and follow-up for traveler’s fever (Tropical Infectious diseases).',
    },
    {
      id: 'cardiovascular-risk',
      backgroundColor: '#ff6666', // Rojo vivo para destacar la importancia
      icon: 'fas fa-heart',
      title: 'Cardiovascular Risk Assessment',
      description: 'Cardiovascular risk follow-up.',
    },
    {
      id: 'gastrointestinal-disorders',
      backgroundColor: '#99e5a1', // Verde brillante para bienestar y frescura
      image: 'assets/images/colon.png', // Ruta del ícono personalizado
      title: 'Gastrointestinal Disorders',
      description: 'Gastrointestinal and hepatic conditions and disorders.',
    },
    
    
  ];
}

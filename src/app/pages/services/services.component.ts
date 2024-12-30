import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
      {
        id: 'hypertension',
        backgroundColor: '#9df2c7', // Verde menta más vibrante
        icon: 'fas fa-heartbeat',
        title: 'Hypertension',
        description:
          'Hypertension, or high blood pressure, is a common condition that can lead to severe complications if left untreated. We offer comprehensive hypertension management, including lifestyle counseling, medication management, and regular monitoring to help control blood pressure and reduce the risk of cardiovascular diseases.',
      },
      {
        id: 'copd',
        backgroundColor: '#ffb3b0', // Rosa más vibrante para cuidado respiratorio
        image: 'assets/images/silueta-de-pulmones.png', // Ruta del ícono personalizado
        title: 'COPD (Chronic Obstructive Pulmonary Disease)',
        description:
          'Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease that makes it hard to breathe. Our treatment plans for COPD include smoking cessation support, bronchodilator therapies, pulmonary rehabilitation, and oxygen therapy to improve quality of life and reduce exacerbations.',
      },
      {
        id: 'diabetes',
        backgroundColor: '#ffe066', // Amarillo vibrante para energía y optimismo
        image: 'assets/images/diabetes-test.png', // Ruta del ícono personalizado
        title: 'Diabetes Mellitus',
        description:
          'Type 2 Diabetes Mellitus is a chronic condition that affects the way your body metabolizes carbohydrates. We provide individualized treatment plans that include dietary counseling, exercise recommendations, medication management, and regular monitoring to help control blood sugar levels and prevent complications.',
      },
      {
        id: 'ckd',
        backgroundColor: '#81e5f7', // Azul más brillante para tranquilidad y limpieza
        image: 'assets/images/kidney.png', // Ruta del ícono personalizado
        title: 'CKD (Chronic Kidney Disease)',
        description:
          'Chronic Kidney Disease (CKD) involves the gradual loss of kidney function. Our CKD management includes monitoring kidney function, controlling blood pressure and blood sugar, managing anemia and bone disease, and preparing for dialysis if necessary. Our goal is to slow the progression of kidney damage and maintain quality of life.',
      },
      {
        id: 'migraine',
        backgroundColor: '#ffcc99', // Beige más vibrante para calma
        icon: 'fas fa-head-side-virus',
        title: 'Migraine',
        description:
          'Migraines are severe headaches that can significantly impact your quality of life. Our migraine management includes identifying triggers, providing pain relief strategies, and offering long-term prevention techniques to reduce the frequency and severity of migraines.',
      },
      {
        id: 'preventive-checkups',
        backgroundColor: '#b3e5cc', // Verde claro vibrante para salud preventiva
        icon: 'fas fa-stethoscope',
        title: 'Preventive Checkups',
        description:
          'Preventive medical checkups are essential for maintaining good health and early detection of potential health issues. We offer comprehensive checkups tailored to your age, gender, and specific health risks, helping you stay proactive about your health.',
      },
      {
        id: 'gastrointestinal-disorders',
        backgroundColor: '#99e5a1', // Verde fresco para bienestar digestivo
        image: 'assets/images/colon.png', // Ruta del ícono personalizado
        title: 'Gastrointestinal Disorders',
        description:
          'Gastrointestinal and hepatic conditions can range from common issues like acid reflux to complex diseases such as liver cirrhosis. Our services include diagnostic evaluations, treatment plans, dietary counseling, and follow-up care to manage and improve gastrointestinal health.',
      },
      {
        id: 'travelers-fever',
        backgroundColor: '#fff8a6', // Amarillo crema más brillante para confianza
        icon: 'fas fa-route',
        title: "Traveler's Fever",
        description:
          "Travelers fever, often associated with tropical infectious diseases, requires prompt evaluation and treatment. We provide comprehensive evaluation and management for fever in travelers, including diagnostic testing, treatment of identified infections, and preventive advice for future travel.",
      },
      {
        id: 'cardiovascular-risk',
        backgroundColor: '#ff6666', // Rojo vivo para destacar la importancia
        icon: 'fas fa-heart',
        title: 'Cardiovascular Risk Assessment',
        description:
          'Assessing cardiovascular risk involves evaluating factors such as cholesterol levels, blood pressure, lifestyle habits, and family history. We provide detailed cardiovascular risk assessments and personalized plans to mitigate these risks, including lifestyle interventions and medication management as needed.',
      },
    
  ];
  
}

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
      icon: 'fa-heartbeat',
      title: 'Hypertension',
      description:
        'Hypertension, or high blood pressure, is a common condition that can lead to severe complications if left untreated. We offer comprehensive hypertension management, including lifestyle counseling, medication management, and regular monitoring to help control blood pressure and reduce the risk of cardiovascular diseases.'
    },
    {
      id: 'copd',
      icon: 'fa-lungs',
      title: 'COPD',
      description:
        'Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease that makes it hard to breathe. Our treatment plans for COPD include smoking cessation support, bronchodilator therapies, pulmonary rehabilitation, and oxygen therapy to improve quality of life and reduce exacerbations.'
    },
    {
      id: 'diabetes',
      icon: 'fa-syringe',
      title: 'Diabetes Mellitus',
      description:
        'Type 2 Diabetes Mellitus is a chronic condition that affects the way your body metabolizes carbohydrates. We provide individualized treatment plans that include dietary counseling, exercise recommendations, medication management, and regular monitoring to help control blood sugar levels and prevent complications.'
    },
    {
      id: 'ckd',
      icon: 'fas fa-flask',
      title: 'CKD (Chronic Kidney Disease)',
      description:
        'Chronic Kidney Disease (CKD) involves the gradual loss of kidney function. Our CKD management includes monitoring kidney function, controlling blood pressure and blood sugar, managing anemia and bone disease, and preparing for dialysis if necessary. Our goal is to slow the progression of kidney damage and maintain quality of life.'
    },
    {
      id: 'migraine',
      icon: 'fa-brain',
      title: 'Migraine',
      description:
        'Migraines are severe headaches that can significantly impact your quality of life. Our migraine management includes identifying triggers, providing pain relief strategies, and offering long-term prevention techniques to reduce the frequency and severity of migraines.'
    },
    {
      id: 'preventive-checkups',
      icon: 'fa-stethoscope',
      title: 'Preventive Checkups',
      description:
        'Preventive medical checkups are essential for maintaining good health and early detection of potential health issues. We offer comprehensive checkups tailored to your age, gender, and specific health risks, helping you stay proactive about your health.'
    },
    {
      id: 'gastrointestinal-disorders',
      icon: 'fas fa-vialfas fa-notes-medical',
      title: 'Gastrointestinal Disorders',
      description:
        'Gastrointestinal and hepatic conditions can range from common issues like acid reflux to complex diseases such as liver cirrhosis. Our services include diagnostic evaluations, treatment plans, dietary counseling, and follow-up care to manage and improve gastrointestinal health.'
    },
    {
      id: 'travelers-fever',
      icon: 'fa-globe',
      title: "Traveler's Fever",
      description:
        "Travelers fever, often associated with tropical infectious diseases, requires prompt evaluation and treatment. We provide comprehensive evaluation and management for fever in travelers, including diagnostic testing, treatment of identified infections, and preventive advice for future travel."
    },
    {
      id: 'cardiovascular-risk',
      icon: 'fa-heart',
      title: 'Cardiovascular Risk Assessment',
      description:
        'Assessing cardiovascular risk involves evaluating factors such as cholesterol levels, blood pressure, lifestyle habits, and family history. We provide detailed cardiovascular risk assessments and personalized plans to mitigate these risks, including lifestyle interventions and medication management as needed.'
    }
  ];
}

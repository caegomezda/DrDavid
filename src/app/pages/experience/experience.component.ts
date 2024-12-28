import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience = {
    typicalPatient: {
      description: 'People between 18-75 years old, foreigners or Colombians.',
      demographics: 'Retired patients.',
      languages: 'English and Spanish.'
    },
    medicalConditions: {
      common: 'Hypertension, Diabetes, Migraine, Obesity, Headaches, Irritable Bowel Syndrome, Gastroesophageal Reflux Disease, Thyroid diseases, Sexually transmitted infections, Preventive medical checkups.',
      specialized: 'Preoperative medical evaluations for chronic disease control, Medical certificates for migration procedures.'
    },
    geographicAnalysis: {
      countries: 'United States, Canada, United Kingdom, Spain.',
      reasons: 'Tourism among younger individuals and residence among older individuals (retirees).'
    },
    patientExpectations: {
      expectations: 'To have a doctor who speaks good English and can manage their chronic diseases.',
      communication: 'WhatsApp.',
      information: 'Opinions of other patients.'
    },
    patientExperience: {
      feedback: 'They praise the commitment and accuracy of the diagnoses.',
      highlights: 'The kindness and clarity in explaining their health conditions.'
    },
    competition: {
      differentiation: 'Few internists speak fluent English, and I have more than 2 years of experience treating international patients.'
    },
    barriers: {
      faced: 'Language, patients who do not speak any Spanish may face difficulties in undergoing medical exams.',
      solutions: 'I have considered forming strategic alliances with laboratories and clinics experienced in attending foreign patients or training my secretary to assist them in scheduling exam appointments.'
    }
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'Chronic Disease Management', percentage: 100 },
    { name: 'Hypertension Treatment', percentage: 95 },
    { name: 'Diabetes Mellitus Management', percentage: 90 },
    { name: 'Gastrointestinal Disorders', percentage: 85 },
    { name: 'Preventive Health Checkups', percentage: 80 },
    { name: 'Cardiovascular Risk Assessment', percentage: 95 },
    { name: 'Patient Communication (Bilingual)', percentage: 100 },
  ];
}

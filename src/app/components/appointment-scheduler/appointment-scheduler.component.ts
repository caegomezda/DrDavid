import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss'],
})
export class AppointmentSchedulerComponent implements OnInit {
  translations: any = {};
  appointmentForm = {
    name: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    contactMethod: '',
    policy: '',
  };

  policies = ['Sura Salud Para Todos', 'Sura Global', 'Sura Clásico', 'Particular'];
  contactMethods = ['Email', 'Phone', 'WhatsApp'];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations) => {
      this.translations = translations?.appointmentScheduler || {};
    });
  }
  

  submitForm() {
    console.log('Form Data:', this.appointmentForm);
    alert(this.translations?.appointmentSubmitted || 'Your appointment request has been submitted!');
  }
}

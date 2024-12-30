import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss'],
})
export class AppointmentSchedulerComponent {
  appointmentForm = {
    name: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    contactMethod: '',
    policy: '',
  };

  policies = [
    'Sura Salud Para Todos',
    'Sura Global',
    'Sura Clásico',
    'Particular',
  ];

  contactMethods = ['Email', 'Phone', 'WhatsApp'];

  submitForm() {
    console.log('Form Data:', this.appointmentForm);
    alert('Your appointment request has been submitted!');
  }
}

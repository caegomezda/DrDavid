import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
// import { FormStorageService } from "../../services/form-opener.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss'],
})
export class AppointmentSchedulerComponent implements OnInit {
  private url = 'https://script.google.com/macros/s/AKfycbzaqtubg5FAMEZrtJHg9wsq8M0XSvaD9x_6Cu54KwG6wrOddDd7F8zo6fkmdmNceEKseA/exec';
  currentForm: { [key: string]: any } = {};
  translations: any = {};
  appointmentForm = {
    currentDate:'',
    name: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    contactMethod: '',
    policy: '',
  };

  policies = ['Sura Salud Para Todos', 'Sura Global', 'Sura Clásico', 'Particular'];
  contactMethods = ['Email', 'Phone', 'WhatsApp'];

  constructor(
    private translationService: TranslationService,
    // private formStorageService: FormStorageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations :any) => {
      this.translations = translations?.appointmentScheduler || {};
    });
  }
  async submitForm(): Promise<void> {
    this.appointmentForm.currentDate = await new Date().toISOString(); 
    const url = '/api'; // URL del proxy configurado
    const formData = { ...this.appointmentForm };
    console.log("formulario",formData);
    
    try {
      // const response = await this.http.post(url, formData).toPromise();
      const response = await this.http.post(url, this.appointmentForm ).toPromise();

      console.log('Respuesta del servidor:', response);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  }
}

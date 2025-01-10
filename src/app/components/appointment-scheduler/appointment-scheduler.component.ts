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
  currentForm: { [key: string]: any } = {};
  translations: any = {};
  appointmentForm = {
    currentDate: '',
    name: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    contactMethod: '',
    policy: '',
  };

  loading: boolean = false; // Nueva bandera de estado de carga
  successMessage: string = ''; // Mensaje de éxito
  errorMessage:string = '' // Limpiar mensaje de error previo
  formSubmitted: boolean = false; // Nueva propiedad para rastrear el estado de envío
  formError: boolean = false; // Nueva propiedad para rastrear el estado de envío
  
  policies = ['Sura Salud Para Todos', 'Sura Global', 'Sura Clásico', 'Particular'];
  contactMethods = ['Email', 'Phone', 'WhatsApp'];

  constructor(
    private translationService: TranslationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations: any) => {
      this.translations = translations?.appointmentScheduler || {};
    });
  }

  async submitForm(): Promise<void> {
    this.appointmentForm.currentDate = await new Date().toISOString();
    // const url = 'https://script.google.com/macros/s/AKfycbyv2fuxnbYd4ouyGehHzjEFMuxuwwLkOlzbOF9_CVyXpe474OcNFP-Wj2b_XX85kdzi9w/exec'; // URL del proxy configurado
    const url = '/api'; // URL del proxy configurado
    this.loading = true; // Activar el estado de carga
    this.successMessage = ''; // Limpiar cualquier mensaje previo
    this.errorMessage  = ''; // Limpiar mensaje de error previo
    const formData = { ...this.appointmentForm };
    try {
      const response = await this.http.post(url, this.appointmentForm).toPromise();
      console.log('Respuesta del servidor:', response);
      // Mostrar mensaje de éxito
      this.successMessage = this.translations?.formSubmitted || 'Form submitted successfully';
      // Limpiar el formulario
    this.resetForm();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Mostrar mensaje de error
      this.errorMessage = this.translations?.formError || 'An error occurred while submitting the form. Please try again.';
    } finally {
      this.loading = false; // Desactivar el estado de carga
    }
  }

  resetForm(): void {
    this.appointmentForm = {
      currentDate: '',
      name: '',
      documentType: '',
      documentNumber: '',
      phone: '',
      contactMethod: '',
      policy: '',
    };
  }
}

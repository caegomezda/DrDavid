import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ServicesComponent } from './pages/services/services.component';
import { FloatingButtonsComponent } from './components//floating-buttons/floating-buttons.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentSchedulerComponent } from './components/appointment-scheduler/appointment-scheduler.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    BookAppointmentComponent,
    PostsComponent,
    ServicesComponent,
    FloatingButtonsComponent,
    CalendarComponent,
    NotFoundComponent,
    TestimonialsComponent,
    SkillsComponent,
    AppointmentSchedulerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, // Aquí se incluye FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

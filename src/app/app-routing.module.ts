import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PostsComponent } from './pages/posts/posts.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { ServicesComponent } from './pages/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: NotFoundComponent }, // Ruta comodín para 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

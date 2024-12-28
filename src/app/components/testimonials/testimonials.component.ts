import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'Michael Roberts',
      position: 'Patient',
      feedback:
        '"Dr. Castaño’s holistic approach and deep understanding of internal medicine have significantly improved my health. His dedication and care are truly exceptional."',
      image: 'assets/images/persona.png',
    },
    {
      name: 'Sarah Johnson',
      position: 'Patient',
      feedback:
        '"I was struggling with a chronic condition, and Dr. Castaño’s expertise in internal medicine has been life-changing. He listens attentively and provides clear guidance."',
      image: 'assets/images/persona.png',
    },
    {
      name: 'Thomas Brown',
      position: 'Caregiver',
      feedback:
        '"Dr. Castaño’s ability to manage complex cases is remarkable. He not only treated my father’s condition but also educated us on how to maintain his health at home."',
      image: 'assets/images/persona.png',
    },
    {
      name: 'Emily Davis',
      position: 'Patient',
      feedback:
        '"As an expat, finding a doctor who speaks fluent English and understands my medical history was a challenge. Dr. Castaño exceeded all my expectations!"',
      image: 'assets/images/persona.png',
    },
  ];

  activeIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => this.nextSlide(), 5000); // Cambia cada 5 segundos
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}

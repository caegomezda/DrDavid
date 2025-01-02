import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [];
  activeIndex = 0;
  interval: any;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations) => {
      if (translations?.testimonials && Array.isArray(translations.testimonials)) {
        this.testimonials = translations.testimonials;
      } else {
        console.warn('No testimonials found in translations.');
        this.testimonials = []; // Fallback si no hay datos de testimonios
      }
    });
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

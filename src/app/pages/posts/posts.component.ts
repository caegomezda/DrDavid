import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  translations: any = {};
  posts: any[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe((translations :any) => {
      this.translations = translations;

      // Verifica si existen los posts en las traducciones
      if (translations?.posts?.items && Array.isArray(translations.posts.items)) {
        this.posts = translations.posts.items;
      } else {
        // console.warn('No posts found in translations.');
        this.posts = []; // Fallback a posts vacíos
      }
    });
  }
}

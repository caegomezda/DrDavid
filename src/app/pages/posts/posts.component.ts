import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts = [
    {
      title: 'Schedule a house-call or an office appointment',
      date: 'Jan 1, 2024',
      description: 'Book a house-call or visit Dr. Castaño’s office for personalized internal medicine care.',
      link: '#'
    },
    {
      title: "Summary of Dr. Castaño's Experience",
      date: 'Jan 1, 2024',
      description: "Explore Dr. Castaño's extensive background in internal medicine and patient care.",
      link: '#'
    },
    {
      title: 'Are you an English speaker and need an internal medicine specialist?',
      date: 'Jan 1, 2024',
      description: 'Learn how Dr. Castaño provides exceptional bilingual medical services in Medellín.',
      link: '#'
    },
    {
      title: 'Our Internal Medicine Services',
      date: 'Jan 1, 2024',
      description: 'Discover the range of internal medicine services tailored to your needs.',
      link: '#'
    },
    {
      title: 'Home Consultation and Office Appointment Services',
      date: 'Jan 1, 2024',
      description: 'Learn more about our house-call and office appointment options.',
      link: '#'
    },
    {
      title: 'Comprehensive Internal Medicine Expertise',
      date: 'Jan 1, 2024',
      description: 'Discover how Dr. Castaño’s experience makes him a trusted choice in Medellín.',
      link: '#'
    },
    {
      title: 'Bilingual Medical Support in Medellín',
      date: 'Jan 1, 2024',
      description: 'Providing expert care for English speakers in Medellín.',
      link: '#'
    },
    {
      title: 'Subscribe via RSS',
      date: '',
      description: 'Stay updated with the latest posts and news from Dr. Castaño.',
      link: '#'
    }
  ];
}

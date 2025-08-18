import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Force top scroll
      }
    });
  }
  keywords = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Engineer',
    'Angular Expert',
    'React Developer',
    'Bootstrap Specialist',
    'Tailwind CSS Pro',
    'JavaScript Ninja',
    'TypeScript Developer',
    'Node.js Backend',
    'MongoDB Architect',
    'UI/UX Designer',
    'API Integrator',
    'Responsive Design Expert',
    'Web Performance Optimizer',
    'Clean Code Enthusiast',
    'Open Source Contributor',
    'Mobile App Developer',
    'Agile Team Player',
    'Cloud Deployment Engineer'
  ];

  services = [
    { icon: 'bi-phone', title: 'Mobile App Design & Development' },
    { icon: 'bi-palette', title: 'UI/UX Design System Creation' },
    { icon: 'bi-gem', title: 'Branding And Visual Identity' },
    { icon: 'bi-graph-up', title: 'Consultation And Strategy' },
    { icon: 'bi-camera-reels', title: 'Video Production Services' },
    { icon: 'bi-layers', title: 'Motion Graphics and Animation' },
    { icon: 'bi-diagram-3', title: 'Content Creation And Strategy' },
    { icon: 'bi-cart', title: 'ECommerce Design Development' }
  ];
}

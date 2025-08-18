import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Force top scroll
      }
    });
  }
  keywords = [
    'SEO & SEM',
    'Content Marketing',
    'Social Media Marketing',
    'Email Marketing',
    'Google Analytics',
    'PPC Advertising',
    'SEO & SEM',
    'Content Marketing',
    'Social Media Marketing',
    'Google Analytics',
  ];





  blogData = [
    {
      image: 'https://www.webfx.com/wp-content/uploads/2021/10/iStock-612224522.jpg',
      title: 'Mastering Responsive Design: A Step-by-Step Guide for Modern Web Development',
      description: 'In today’s digital landscape, responsive design isn’t just a nice-to-have feature — it’s a necessity. As developers, we aim to create web applications that work seamlessly across devices,',
      link: 'https://medium.com/@rs.imran7nazeer/mastering-responsive-design-a-step-by-step-guide-for-modern-web-development-a7f808f23f3b',
      date: '10-11-2001',
      readtime: '3 min read '
    },
    {
      image: 'https://s3.amazonaws.com/angularminds.com/blog/media/LifeCycle%20Hooks-20240408112716416.jpeg',
      title: 'Unlocking the Power of Angular: A Journey Through Lifecycle Hooks',
      description: 'In the world of Angular development, understanding lifecycle hooks is like mastering the art of timing in a symphony. Each hook represents a different moment in a component’s lifecycle, providing developers with the perfect opportunity to insert custom logic. Let me take you on a journey through these hooks, revealing how they can transform your Angular applications.',
      link: 'https://medium.com/@rs.imran7nazeer/unlocking-the-power-of-angular-a-journey-through-lifecycle-hooks-8c94d092c264',
      date: 'Sep 16, 2024',
      readtime: '3 min read'

    },
    {
      image: 'https://media.licdn.com/dms/image/v2/C5612AQGLrdKafscL-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1631591392088?e=2147483647&v=beta&t=hORnImcdE8hWWIQj2AUqpSVH97sYEBByNJq0RFi-KE4',
      title: 'Understanding Objects and Classes in Java: A Beginner’s Guide',
      description: 'When you’re starting out with Java, two fundamental concepts you’ll encounter are objects and classes. Understanding these is key to mastering object-oriented programming (OOP). In this guide, we’ll break down these concepts into simple terms.',
      link: 'https://medium.com/@rs.imran7nazeer/understanding-objects-and-classes-in-java-a-beginners-guide-20406ed398f4',
      date: 'Aug 14, 2024',
      readtime: '2 min read'

    },
    {
      image: 'https://devio2023-media.developers.io/wp-content/uploads/2018/06/angular_bootstrap.png',
      title: 'Installing Bootstrap in an Angular Project',
      description: 'Bootstrap is a popular front-end framework that helps in creating responsive and visually appealing web applications. In this guide, we’ll go through the steps to install and configure Bootstrap in your Angular project.',
      link: 'https://medium.com/@rs.imran7nazeer/installing-bootstrap-in-an-angular-project-b9adff13154f',
      date: 'Aug 14, 2024',
      readtime: '2 min read'

    },
    {
      image: 'https://malcoded.com/_astro/Angular-Error.DvoVURrg_Z1HW1cx.webp',
      title: 'What are the most common mistakes developers make when starting with Angular, and how can they be avoided?',
      description: 'New developers often struggle with Angular’s architecture, especially its component-based structure and dependency injection system. They might not fully grasp how modules, components, and services interact.',
      link: 'https://medium.com/@rs.imran7nazeer/what-are-the-most-common-mistakes-developers-make-when-starting-with-angular-and-how-can-they-be-cf242f7338de',
      date: 'Jul 24, 2024',
      readtime: '3 min read'

    },


  ];


  redirectToLink(linkURL: string) {
    if (!!linkURL) {
      window.open(linkURL, "_blank"); // ✅ opens in new tab/window
    }
  }


}

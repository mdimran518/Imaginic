import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Force top scroll
      }
    });
  }
  testimonials = [
    {
      rating: 5,
      review: "Absolutely love this product! It exceeded my expectations.",
      name: "Emma Watson",
      img: "https://dummyimage.com/350x150/423b42/fff"
    },
    {
      rating: 4,
      review: "Really good experience. Customer support was helpful too.",
      name: "Liam Carter",
      img: "https://dummyimage.com/350x150/5a5a5a/ffffff"
    },
    {
      rating: 5,
      review: "Great value for money. Highly recommend it!",
      name: "Sophia Patel",
      img: "https://dummyimage.com/350x150/6b4d57/fff"
    },
    {
      rating: 3,
      review: "It was decent. Could improve a few features.",
      name: "Noah Kim",
      img: "https://dummyimage.com/350x150/2f2f2f/ffffff"
    },
    {
      rating: 5,
      review: "Amazing service and quality. Will buy again!",
      name: "Ava Singh",
      img: "https://dummyimage.com/350x150/4b4b4b/ffffff"
    },
    {
      rating: 4,
      review: "Very useful. Took a little time to get used to.",
      name: "Ethan Johnson",
      img: "https://dummyimage.com/350x150/3a3a3a/ffffff"
    },
    {
      rating: 5,
      review: "Outstanding! Everything works as described.",
      name: "Isabella Khan",
      img: "https://dummyimage.com/350x150/524d52/ffffff"
    },
    {
      rating: 5,
      review: "Top-notch experience. Five stars from me!",
      name: "James Lee",
      img: "https://dummyimage.com/350x150/5c5c5c/ffffff"
    },
    {
      rating: 4,
      review: "Good purchase. Worth the price.",
      name: "Mia Chen",
      img: "https://dummyimage.com/350x150/474747/ffffff"
    },
    {
      rating: 5,
      review: "Flawless from start to finish. Thanks!",
      name: "Lucas Brown",
      img: "https://dummyimage.com/350x150/403c3c/ffffff"
    }
  ];

  socialItems = [
    { icon: 'bi bi-facebook', name: 'Facebook' },
    { icon: 'bi bi-whatsapp', name: 'Whatsapp' },
    { icon: 'bi bi-instagram', name: 'Instagram' },
    { icon: 'bi bi-reddit', name: 'Reddit' },
    { icon: 'bi bi-linkedin', name: 'Linkedin' },
  ];

  premiumTools = [
    // Frontend
    { iconImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcmNsbFZbkW12pz87b1Q64Dl2VNcmhXzcnQ&s', name: 'Angular', description: 'Frontend framework for building dynamic web applications' },
    { iconImage: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', name: 'React Native', description: 'Cross-platform framework for building mobile apps (Android & iOS)' },
    { iconImage: 'https://images.seeklogo.com/logo-png/38/2/bootstrap-5-logo-png_seeklogo-386607.png', name: 'Bootstrap', description: 'CSS framework for responsive web design' },
    { iconImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png', name: 'Tailwind CSS', description: 'Utility-first CSS framework for fast UI development' },

    // Backend
    { iconImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RNgloYivDxu-m0uthmQb78H2ULQhv94GZw&s', name: 'Spring Boot', description: 'Java-based backend framework for building REST APIs and web services' },

    // Database
    { iconImage: 'https://images.seeklogo.com/logo-png/50/1/mongodb-icon-logo-png_seeklogo-503274.png', name: 'MongoDB', description: 'NoSQL database for storing flexible and scalable data' },

    // API & Networking
    { iconImage: 'https://images.seeklogo.com/logo-png/42/1/axios-logo-png_seeklogo-428046.png', name: 'Axios', description: 'Promise-based HTTP client for making API requests from frontend' },
    { iconImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s', name: 'Postman', description: 'API testing and development tool' },

    // Security
    { iconImage: 'https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png', name: 'JWT (JSON Web Token)', description: 'Secure authentication mechanism for web and mobile applications' },
    { iconImage: 'https://www.pngmart.com/files/7/Secure-HTTPS-PNG-HD.png', name: 'HTTPS', description: 'Protocol for secure communication over the web' },
    { iconImage: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png', name: 'Firebase Authentication', description: 'Secure user authentication using OTP, email, and more' },

    // Dev Tools
    { iconImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png', name: 'Git', description: 'Version control system to track code changes' },
    { iconImage: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', name: 'GitHub', description: 'Code hosting platform for collaboration and deployment' },

    // IDEs
    { iconImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png', name: 'VS Code', description: 'Lightweight code editor for frontend and backend development' },
    { iconImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtw4mcx0jNF7uREt7cC1nmb2bGzErmrz0smw&s', name: 'Android Studio', description: 'Official IDE for Android app development and debugging' },
    { iconImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/666px-Apache_NetBeans_Logo.svg.png', name: 'NetBeans', description: 'Java IDE for backend development using Spring Boot' },

    // Build & Package
    { iconImage: 'https://cdn.freebiesupply.com/logos/thumbs/2x/gradle-1-logo.png', name: 'Gradle', description: 'Build tool used in Android and Java-based projects' },
    { iconImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png', name: 'npm', description: 'Package manager for managing JavaScript libraries and dependencies' },
  ];

}

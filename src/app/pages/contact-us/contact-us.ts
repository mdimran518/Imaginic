import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Force top scroll
      }
    });
  }
  formData = {
    name: '',
    email: '',
    subject: '',
    location: '',
    message: ''
  };


  sendEmail() {
    const { name, email, subject, location, message } = this.formData;

    const body = `
    Name: ${name}
    Email: ${email}
    Location: ${location}
    Message: ${message}
    `;

    const mail = `mailto:rs.imran7nazeer?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mail;
  }
}

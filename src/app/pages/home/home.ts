import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Force top scroll
      }
    });
  }

  ngOnInit(): void {

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

  socialItems = [
    { icon: 'bi bi-facebook', name: 'Facebook' },
    { icon: 'bi bi-whatsapp', name: 'Whatsapp' },
    { icon: 'bi bi-instagram', name: 'Instagram' },
    { icon: 'bi bi-reddit', name: 'Reddit' },
    { icon: 'bi bi-linkedin', name: 'Linkedin' },
  ];

  services = [
    {
      question: 'What frontend services do I provide?',
      answer: 'I build responsive, dynamic, and user-friendly interfaces using Angular, React Native, Bootstrap, and Tailwind CSS to deliver seamless digital experiences.'
    },
    {
      question: 'What backend expertise do I offer?',
      answer: 'I develop scalable and efficient backend solutions with Java and Spring Boot, ensuring secure REST APIs and smooth integration with frontend applications.'
    },
    {
      question: 'Which databases do I work with?',
      answer: 'I specialize in MongoDB for flexible NoSQL solutions, while also being experienced in designing structured schemas to handle complex and scalable data.'
    },
    {
      question: 'How do I ensure application security?',
      answer: 'I implement authentication and authorization using JWT, HTTPS, and Firebase Authentication, ensuring secure access and data protection across applications.'
    }
  ];

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "mediafiles/pdf/imranresume.pdf"; // path inside assets
    link.download = "myfile.pdf";         // name to save as
    link.click();
  }

  routeTo(pagename: string) {
    if (pagename) {
      this.router.navigateByUrl(pagename);
    }
  }

  sendEmail() {
    const subject = "Hiring Inquiry";        // Define your subject
    const body = "Hello, I would like to hire you for a project."; // Define your body
    const email = "rs.imran7nazeer@gmail.com"; // Add your full email

    const mail = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
  }

  openWhatsApp() {
    const phone = "918051561756"; // Your WhatsApp number with country code
    const message = "Hello, I would like to hire you for a project."; // Your message

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Opens in a new tab
  }
}

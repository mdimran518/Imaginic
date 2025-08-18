import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  socialItems = [
    { icon: 'bi bi-facebook', name: 'Facebook', url: 'https://www.facebook.com/md.imran.afridi.2025' },
    { icon: 'bi bi-whatsapp', name: 'Whatsapp', phone: '918051561756', message: 'Hello, I would like to hire you for a project.' },
    { icon: 'bi bi-instagram', name: 'Instagram', url: 'https://www.instagram.com/imran_9.9.1/?next=%2F' },
    { icon: 'bi bi-reddit', name: 'Reddit', url: 'https://www.reddit.com/user/Dizzy_Cow9837/' },
    { icon: 'bi bi-linkedin', name: 'Linkedin', url: 'https://www.linkedin.com/in/md-imran-nazeer-911309309/' },
  ];

  openSocial(item: any) {
    if (item.name === 'Whatsapp') {
      const url = `https://wa.me/${item.phone}?text=${encodeURIComponent(item.message)}`;
      window.open(url, '_blank');
    } else {
      window.open(item.url, '_blank');
    }
  }
}

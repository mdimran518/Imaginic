import { Component, HostListener } from '@angular/core';
import { CommanService } from '../../services/comman-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isScrolledDown = false;
  lastScrollTop = 0;

  constructor(private cs: CommanService) {

  }

  @HostListener('window:scroll')
  windowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolledDown = st > this.lastScrollTop && st > 50;
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    const navigationBar = document.getElementById('navigation') as any;
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      if (!!navigationBar) {
        navigationBar.classList.add('active');
      }
    } else {
      if (!!navigationBar) {
        navigationBar.classList.remove('active');
      }
    }
  }

  openSidebar(sidebarID: string) {
    if (!!sidebarID) {
      this.cs.openOffcanvas(sidebarID);;;
    }
  }

  closeSidebar() {
    this.cs.closeOffcanvas('sidebarOffcanvas');
  }
}

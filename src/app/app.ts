import { Component, HostListener, OnInit, signal } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommanService } from './services/comman-service';
import { NavigationEnd, Router } from '@angular/router';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(-10px)' })),
      transition('hidden <=> visible', animate('300ms ease-in-out')),
    ])
  ]
})
export class App implements OnInit {
  protected readonly title = signal('imaginic');
  isShowSocialMedia: boolean = false;
  isShowHeaderAndFooter: boolean = true;

  // Inject the CommanService and Router in the constructor
  // This allows us to use the service methods and navigate programmatically

  constructor(private cs: CommanService, private router: Router) {
    // Initialize any services or state here if needed
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Refresh GSAP triggers after route load
        setTimeout(() => {
          ScrollTrigger.refresh();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200); // small delay so DOM is ready


      }
    });
  }
  handleMenuClick() {
    this.isShowSocialMedia = !this.isShowSocialMedia;
  }

  ngOnInit() {
    this.handleHeaderAndFooterVisibility();
    // Optionally, you can subscribe to router events to handle visibility dynamically
    this.router.events.subscribe(() => {
      this.handleHeaderAndFooterVisibility();
    });
  }


  ngOnDestroy() {
    this.cs.cleanUpAll();
  }

  lastScrollTop = 0;
  isScrollingUp = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.isScrollingUp = true;
    } else {
      // Scrolling up
      this.isScrollingUp = false;

    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  openChatWithUs() {
    this.router.navigateByUrl('imaginicai');
  }


  // isShowHeaderAndFooter
  handleHeaderAndFooterVisibility() {
    if (this.router.url === '/imaginicai') {
      this.isShowHeaderAndFooter = false;
    } else {
      this.isShowHeaderAndFooter = true;
    }
  }

}

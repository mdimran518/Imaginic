import { Directive, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[gsap]',
  standalone: false
})
export class GsapDirective implements AfterViewInit {
  @Input('gsap') animation: string = 'fade-up';
  @Input() duration: number = 1;
  @Input() delay: number = 0;
  @Input() easing: string = 'power2.out';
  @Input() stagger: number = 0.05;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;

    // Wait for next frame so DOM is ready
    requestAnimationFrame(() => {
      if (this.animation === 'split-text') {
        this.splitTextAnimation(element);
      } else {
        this.defaultAnimation(element);
      }
    });
  }

  private defaultAnimation(element: HTMLElement) {
    let animationConfig: any = {
      opacity: 0,
      duration: this.duration,
      delay: this.delay,
      ease: this.easing,
      willChange: 'transform, opacity',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    };

    switch (this.animation) {
      case 'fade-up': animationConfig.y = 50; break;
      case 'fade-down': animationConfig.y = -50; break;
      case 'fade-left': animationConfig.x = -50; break;
      case 'fade-right': animationConfig.x = 50; break;
      case 'zoom-in': animationConfig.scale = 0.5; break;
      case 'zoom-out': animationConfig.scale = 1.5; break;
      case 'rotate': animationConfig.rotation = 180; break;
    }

    gsap.from(element, animationConfig);
  }

  private splitTextAnimation(element: HTMLElement) {
    const text = element.innerText;
    element.innerHTML = '';

    text.split(' ').forEach(word => {
      const wordSpan = this.renderer.createElement('span');
      this.renderer.setStyle(wordSpan, 'display', 'inline-block');
      this.renderer.setStyle(wordSpan, 'margin-right', '0.25em');
      this.renderer.setStyle(wordSpan, 'will-change', 'transform, opacity');

      word.split('').forEach(char => {
        const charSpan = this.renderer.createElement('span');
        this.renderer.setStyle(charSpan, 'display', 'inline-block');
        this.renderer.setStyle(charSpan, 'will-change', 'transform, opacity');
        charSpan.textContent = char;
        this.renderer.appendChild(wordSpan, charSpan);
      });

      this.renderer.appendChild(element, wordSpan);
    });

    const chars = element.querySelectorAll('span span');
    gsap.from(chars, {
      opacity: 0,
      x: -30,
      duration: this.duration,
      delay: this.delay,
      ease: this.easing,
      stagger: this.stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}

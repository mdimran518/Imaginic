import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Header } from './pages/header/header';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { ContactUs } from './pages/contact-us/contact-us';
import { Footer } from './pages/footer/footer';
import { Blog } from './pages/blog/blog';
import { ImaginicAi } from './pages/imaginic-ai/imaginic-ai';
import { GsapDirective } from './core/directives/gsap.directive';
import { Projects } from './pages/projects/projects';

@NgModule({
  declarations: [
    App,
    Header,
    Home,
    About,
    Services,
    ContactUs,
    Footer,
    Blog,
    ImaginicAi,
    GsapDirective,
    Projects
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [App]
})
export class AppModule { }

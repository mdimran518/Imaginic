import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';
import 'slick-carousel';
import { register } from 'swiper/element/bundle';
register();
platformBrowser().bootstrapModule(AppModule, {

})
  .catch(err => console.error(err));

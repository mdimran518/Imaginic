import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { ContactUs } from './pages/contact-us/contact-us';
import { Blog } from './pages/blog/blog';
import { ImaginicAi } from './pages/imaginic-ai/imaginic-ai';
import { Projects } from './pages/projects/projects';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'services', component: Services },
  { path: 'contactus', component: ContactUs },
  { path: 'blog', component: Blog },
  { path: 'imaginicai', component: ImaginicAi },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled', // let us control scroll manually
      anchorScrolling: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

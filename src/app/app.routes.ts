import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VisionComponent } from './components/vision/vision.component';
import { ProductsComponent } from './components/products/products.component';
import { TeamComponent } from './components/team/team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
];

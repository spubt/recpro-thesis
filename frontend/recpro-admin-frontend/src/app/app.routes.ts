import { Routes } from '@angular/router';
import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {Full_ROUTES} from './shared/routes/full-layout.routes';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: Full_ROUTES
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

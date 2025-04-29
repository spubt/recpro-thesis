import {Routes} from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./../../components/login/login.module').then(m => m.LoginModule)
  }
]

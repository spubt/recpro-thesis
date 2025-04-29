import {Routes} from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'bpm',
    loadChildren: () => import('../../components/bpm/bpm.module').then(m => m.BpmModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../../components/user/user.module').then(m => m.UserModule)
  }
]

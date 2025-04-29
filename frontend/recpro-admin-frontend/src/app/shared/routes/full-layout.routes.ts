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
    path: 'recommendation',
    loadChildren: () => import('../../components/recommendation/recommendation.module').then(m => m.RecommendationModule)
  },
  {
    path: 'erc-data',
    loadChildren: () => import('../../components/erc-data/erc-data.module').then(m => m.ErcDataModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('../../components/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('../../components/modules/modules.module').then(m => m.ModulesModule)
  },
]

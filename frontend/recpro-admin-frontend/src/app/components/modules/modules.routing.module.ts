import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AnalysisModuleComponent} from './analysis-module/analysis-module.component';
import {InputModuleComponent} from './input-module/input-module.component';
import {OutputModuleComponent} from './output-module/output-module.component';
import {PostFilteringModuleComponent} from './post-filtering-module/post-filtering-module.component';
import {PreFilteringModuleComponent} from './pre-filtering-module/pre-filtering-module.component';
import {RecommendationModuleComponent} from './recommendation-module/recommendation-module.component';
import {FilterModelingModuleComponent} from './filter-modeling-module/filter-modeling-module.component';
import {canActivateAuthRole} from '../../auth/keycloak/keycloak.guard';

const routes: Routes = [
  {
    path: 'analysis',
    component: AnalysisModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  {
    path: 'input',
    component: InputModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  {
    path: 'output',
    component: OutputModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  {
    path: 'post-filtering',
    component: PostFilteringModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  {
    path: 'pre-filtering',
    component: PreFilteringModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  {
    path: 'recommendation',
    component: RecommendationModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  {
    path: 'filter-modeling',
    component: FilterModelingModuleComponent,
    children: [

    ],
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }

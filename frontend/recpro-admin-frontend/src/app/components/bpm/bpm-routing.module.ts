import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BpmModelingComponent} from "./modeling/bpm-modeling/bpm-modeling.component";
import {BpmAnalysisComponent} from './analysis/bpm-analysis/bpm-analysis.component';
import {ProcessModelingComponent} from './modeling/bpm-modeling/process-modeling/process-modeling.component';
import {ActivityModelingComponent} from './modeling/bpm-modeling/activity-modeling/activity-modeling.component';
import {BpmRoleModelingComponent} from './modeling/bpm-modeling/bpm-role-modeling/bpm-role-modeling.component';
import {canActivateAuthRole} from '../../auth/keycloak/keycloak.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analysis',
        component: BpmAnalysisComponent,
      },
      {
        path: 'modeling',
        component: BpmModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'modeling/process',
        component: ProcessModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'modeling/activity',
        component: ActivityModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'modeling/bpmRole',
        component: BpmRoleModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BpmRoutingModule { }

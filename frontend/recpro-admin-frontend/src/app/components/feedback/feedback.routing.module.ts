import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FeedbackAnalysisComponent} from './analysis/feedback-analysis/feedback-analysis.component';
import {FeedbackModelingComponent} from './modeling/feedback-modeling/feedback-modeling.component';
import {canActivateAuthRole} from '../../auth/keycloak/keycloak.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analysis',
        component: FeedbackAnalysisComponent
      },
      {
        path: 'modeling',
        component: FeedbackModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
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
export class FeedbackRoutingModule { }

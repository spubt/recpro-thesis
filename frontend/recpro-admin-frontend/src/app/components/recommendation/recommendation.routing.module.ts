import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendationModelingComponent} from './modeling/recommendation-modeling/recommendation-modeling.component';
import {canActivateAuthRole} from '../../auth/keycloak/keycloak.guard';
import {DimensionModelingComponent} from './modeling/dimension/dimension-modeling/dimension-modeling.component';
import {
  RecommendationServiceModelingComponent
} from './modeling/recommendation-service/recommendation-service-modeling/recommendation-service-modeling.component';
import {RecommendationAnalysisComponent} from './analysis/recommendation-analysis/recommendation-analysis.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [canActivateAuthRole],
    data: { role: 'admin'},
    children: [
      {
        path: 'analysis',
        component: RecommendationAnalysisComponent
      },
      {
        path: 'modeling',
        component: RecommendationModelingComponent,
      },{
        path: 'modeling/dimension',
        component: DimensionModelingComponent
      }, {
        path: 'modeling/recommendationService',
        component: RecommendationServiceModelingComponent,
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
export class RecommendationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ErcDataAnalysisComponent} from './analysis/erc-data-analysis/erc-data-analysis.component';
import {ErcDataModelingComponent} from './modeling/erc-data-modeling/erc-data-modeling.component';
import {MetaAttributesComponent} from './modeling/meta-attributes/meta-attributes.component';
import {EnvironmentalParametersComponent} from './modeling/environmental-parameters/environmental-parameters.component';
import {ActivityParametersComponent} from './modeling/activity-parameters/activity-parameters.component';
import {canActivateAuthRole} from '../../auth/keycloak/keycloak.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analysis',
        component: ErcDataAnalysisComponent,
      },
      {
        path: 'modeling',
        component: ErcDataModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'modeling/metaattributes',
        component: MetaAttributesComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'modeling/environmentalParameters',
        component: EnvironmentalParametersComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'modeling/activityParameters',
        component: ActivityParametersComponent,
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
export class ErcDataRoutingModule { }

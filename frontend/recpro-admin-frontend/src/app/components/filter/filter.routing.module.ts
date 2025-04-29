import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterModelingComponent} from "./modeling/filter-modeling/filter-modeling.component";
import {FilterAnalysisComponent} from './analysis/filter-analysis/filter-analysis.component';
import {canActivateAuthRole} from '../../auth/keycloak/keycloak.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'modeling',
        component: FilterModelingComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'analysis',
        component: FilterAnalysisComponent
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
export class FilterRoutingModule { }

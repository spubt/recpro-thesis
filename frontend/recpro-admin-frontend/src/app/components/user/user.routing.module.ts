import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserExecutionComponent} from './execution/user-execution/user-execution.component';
import {UserModelingComponent} from './modeling/user-modeling/user-modeling.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'execution',
        component: UserExecutionComponent
      },
      {
        path: 'modeling',
        component: UserModelingComponent
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }

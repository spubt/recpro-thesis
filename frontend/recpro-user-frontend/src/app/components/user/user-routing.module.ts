import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from './user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }

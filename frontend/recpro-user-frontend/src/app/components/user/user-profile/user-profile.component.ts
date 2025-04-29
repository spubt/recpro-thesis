import { Component } from '@angular/core';
import {ApplicationRole, Gender, User, UserModelingService, UserStatus} from '@recprocess/recpro-frontend-lib';
import {AuthService} from '../../../auth/auth.service';
import {MatModule} from '../../../util/mat/mat.module';
import {take} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [
    MatModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

    applicationRoleTypes = Object.values(ApplicationRole);
    userStatusTypes = Object.values(UserStatus);
    genderTypes = Object.values(Gender);currentUser: User = new User();

  constructor(
    private userService: UserModelingService,
    private authService: AuthService,
  ) {
    this._getUser();
  }

  private _getUser() {

    this.authService.getCurrentUserAsync().then(user => {
      this.userService.getById(user.id!).pipe(take(1)).subscribe(res => this.currentUser = res);
    });
  }

  private updateUser() {
    this.userService.update(this.currentUser).subscribe(res => this.currentUser = res);
  }

}

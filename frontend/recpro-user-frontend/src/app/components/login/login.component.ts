import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatModule} from '../../util/mat/mat.module';
import {User} from '@recprocess/recpro-frontend-lib';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;
  email: string = '';

  constructor(
    public dialog: MatDialog
  ) {
  }

  login() {
    let user = new User();
    user.firstName = 'test';
    user.lastName = 'test';
    user.id = '1';
    user.email = 'test@test.com';

    // this.userService.getByMail(this.email).pipe(take(1)).subscribe(res => {
    //   this.authService.setCurrentUser(res);
    // });
  }

  createUser() {
    //   const dialogRef = this.dialog.open(CreateUserDialogComponent);
    //
    //   dialogRef.afterClosed().subscribe(res => {
    //     if (res) {
    //       this.userService.create(res);
    //     }
    //   })
  }
}

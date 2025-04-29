import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../util/mat/mat.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatModule,
    FormsModule,
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
    // let user = new User();
    // user.firstName = 'test';
    // user.lastName = 'test';
    // user.id = '1';
    // user.description = 'description';
    // user.email = 'test@test.com';
    // this.authService.setCurrentUser(user);
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

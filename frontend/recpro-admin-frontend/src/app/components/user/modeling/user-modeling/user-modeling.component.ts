import { Component } from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';

import {CreateUserDialogComponent} from './create-user-dialog/create-user-dialog.component';
import {UserTableComponent} from './user-table/user-table.component';
import {DialogService, User, UserModelingService} from '@recprocess/recpro-frontend-lib';

@Component({
  selector: 'app-user-modeling',
  imports: [
    MatModule,
    UserTableComponent
  ],
  templateUrl: './user-modeling.component.html',
  standalone: true,
  styleUrl: './user-modeling.component.scss'
})
export class UserModelingComponent {

  users: User[] = [];

  constructor(
    private dialogService: DialogService,
    private userService: UserModelingService
  ) {
    this.getData();
  }

  getData() {
    this.userService.getAll().subscribe(res => this.users = res);
  }

  createUser() {
    const dialogRef = this.dialogService.open(CreateUserDialogComponent, {user: new User(), password: 'test'});
    dialogRef.afterClosed().subscribe(() => {
      console.log('DIALOG CLOSED')
      this.getData();});
  }

}

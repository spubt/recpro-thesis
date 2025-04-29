import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../util/mat/mat.module';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ApplicationRole,
  Gender,
  User,
  UserModelingService,
  UserStatus
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-create-user-dialog',
  imports: [
    MatModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-user-dialog.component.html',
  standalone: true,
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent {

  applicationRoleTypes = Object.values(ApplicationRole);
  userStatusTypes = Object.values(UserStatus);
  genderTypes = Object.values(Gender);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: User, password: string },
    private dialogRef: MatDialogRef<CreateUserDialogComponent>,
    public service: UserModelingService
  ) {
    if (this.data.user.id === null || this.data.user.id === undefined) {
      this.data.user = new User();
    } else {
      this.service.getById(this.data.user.id!).subscribe(res => this.data.user = res);
    }
  }

  save() {
    if (this.data.password === '') {
      this.service.update(this.data.user).subscribe(() => this.dialogRef.close());
    } else {
      this.service.create(this.data.user, this.data.password).subscribe(() => this.dialogRef.close());
    }
  }

}

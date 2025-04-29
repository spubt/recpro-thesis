import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../util/mat/mat.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  AbstractActivityParameter,
  ActivityParameterModelingService, ActivityParameterService,
  ParameterType
} from '@recprocess/recpro-frontend-lib';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  CreateBinaryActivityParameterComponent
} from './create-binary-activity-parameter/create-binary-activity-parameter.component';
import {
  CreateDateActivityParameterComponent
} from './create-date-activity-parameter/create-date-activity-parameter.component';
import {
  CreateNumericActivityParameterComponent
} from './create-numeric-activity-parameter/create-numeric-activity-parameter.component';
import {
  CreateTextualActivityParameterComponent
} from './create-textual-activity-parameter/create-textual-activity-parameter.component';

@Component({
  selector: 'app-create-activity-parameter',
  imports: [
    MatModule,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    CreateBinaryActivityParameterComponent,
    CreateDateActivityParameterComponent,
    CreateNumericActivityParameterComponent,
    CreateTextualActivityParameterComponent
  ],
  standalone: true,
  templateUrl: './create-activity-parameter-dialog.component.html',
  styleUrl: './create-activity-parameter-dialog.component.scss'
})
export class CreateActivityParameterDialogComponent {

  activityParameterTypes = Object.values(ParameterType);

  constructor(
    @Inject(MAT_DIALOG_DATA) public activityParameter: AbstractActivityParameter,
    private modelingService: ActivityParameterModelingService,
    private dialogRef: MatDialogRef<CreateActivityParameterDialogComponent>,
    public activityParameterService: ActivityParameterService
  ) {
    if (this.activityParameter === null || this.activityParameter === undefined) {
      this.activityParameter = new AbstractActivityParameter();
    }
  }

  save() {
    this.modelingService.create(this.activityParameter).subscribe(() => {
      this.dialogRef.close();
    });
  }
}

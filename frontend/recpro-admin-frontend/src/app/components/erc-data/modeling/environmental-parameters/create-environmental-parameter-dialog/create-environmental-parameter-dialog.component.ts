import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../util/mat/mat.module';
import {
  AbstractEnvironmentalParameter,
  EnvironmentalParameterModelingService, EnvironmentalParameterService,
  ParameterType
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {
  CreateNumericEnvironmentalParameterComponent
} from './create-numeric-environmental-parameter/create-numeric-environmental-parameter.component';
import {
  CreateTextualEnvironmentalParameterComponent
} from './create-textual-environmental-parameter/create-textual-environmental-parameter.component';
import {
  CreateDateEnvironmentalParameterComponent
} from './create-date-environmental-parameter/create-date-environmental-parameter.component';
import {
  CreateBinaryEnvironmentalParameterComponent
} from './create-binary-environmental-parameter/create-binary-environmental-parameter.component';

@Component({
  selector: 'app-create-environmental-parameter-dialog',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
    NgIf,
    CreateNumericEnvironmentalParameterComponent,
    CreateTextualEnvironmentalParameterComponent,
    CreateDateEnvironmentalParameterComponent,
    CreateBinaryEnvironmentalParameterComponent
  ],
  templateUrl: './create-environmental-parameter-dialog.component.html',
  standalone: true,
  styleUrl: './create-environmental-parameter-dialog.component.scss'
})
export class CreateEnvironmentalParameterDialogComponent {

  parameterTypes = Object.values(ParameterType);

  constructor(
    @Inject(MAT_DIALOG_DATA) public parameter: AbstractEnvironmentalParameter,
    private modelingService: EnvironmentalParameterModelingService,
    private dialogRef: MatDialogRef<CreateEnvironmentalParameterDialogComponent>,
    public environmentalParameterService: EnvironmentalParameterService
  ) {
    if (this.parameter === null || this.parameter === undefined) {
      this.parameter = new AbstractEnvironmentalParameter();
    }
  }

  save() {
    this.modelingService.create(this.parameter).subscribe(() => this.dialogRef.close());
  }

}

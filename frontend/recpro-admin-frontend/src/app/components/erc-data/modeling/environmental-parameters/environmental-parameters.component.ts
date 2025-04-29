import { Component } from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {
  EnvironmentalParameterTableComponent
} from './environmental-parameter-table/environmental-parameter-table.component';
import {
  AbstractEnvironmentalParameter,
  DialogService,
  EnvironmentalParameterModelingService
} from '@recprocess/recpro-frontend-lib';
import {
  CreateEnvironmentalParameterDialogComponent
} from './create-environmental-parameter-dialog/create-environmental-parameter-dialog.component';

@Component({
  selector: 'app-environmental-parameters',
  imports: [
    MatModule,
    EnvironmentalParameterTableComponent
  ],
  templateUrl: './environmental-parameters.component.html',
  standalone: true,
  styleUrl: './environmental-parameters.component.scss'
})
export class EnvironmentalParametersComponent {

  environmentalParameters: AbstractEnvironmentalParameter[] = [];

  constructor(
    private dialogService: DialogService,
    private environmentalParameterService: EnvironmentalParameterModelingService
  ) {
    this.getEnvironmentalParameters();
  }

  createEnvironmentalParameter() {
    const dialogRef = this.dialogService.open(CreateEnvironmentalParameterDialogComponent, new AbstractEnvironmentalParameter());
    dialogRef.afterClosed().subscribe(() => this.getEnvironmentalParameters());
  }

  getEnvironmentalParameters() {
    this.environmentalParameterService.getAll().subscribe(res => {
      this.environmentalParameters = res;
    });
  }
}

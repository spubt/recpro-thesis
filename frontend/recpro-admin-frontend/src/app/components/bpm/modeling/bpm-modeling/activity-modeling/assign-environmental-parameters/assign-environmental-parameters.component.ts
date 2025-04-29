import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {
  AbstractEnvironmentalParameter,
  Activity,
  EnvironmentalParameterConfiguration, EnvironmentalParameterConfigurationService, EnvironmentalParameterModelingService
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  EnvironmentalParameterConfigurationTableComponent
} from './environmental-parameter-configuration-table/environmental-parameter-configuration-table.component';
import {
  CreateEnvironmentalParameterConfigurationComponent
} from './create-environmental-parameter-configuration/create-environmental-parameter-configuration.component';

@Component({
  selector: 'app-assign-environmental-parameters',
  imports: [
    MatModule,
    EnvironmentalParameterConfigurationTableComponent,
    CreateEnvironmentalParameterConfigurationComponent
  ],
  templateUrl: './assign-environmental-parameters.component.html',
  standalone: true,
  styleUrl: './assign-environmental-parameters.component.scss'
})
export class AssignEnvironmentalParametersComponent {

  configurations: EnvironmentalParameterConfiguration[] = [];
  parameters: AbstractEnvironmentalParameter[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public activity: Activity,
    private configurationService: EnvironmentalParameterConfigurationService,
    private parameterService: EnvironmentalParameterModelingService,
    private dialogRef: MatDialogRef<AssignEnvironmentalParametersComponent>
  ) {
    this.getData();
  }

  getData() {
    this.configurationService.getByActivityId(this.activity.id!).subscribe(res => this.configurations = res);
    this.parameterService.getAll().subscribe(res => this.parameters = res);
  }

  addConfiguration(configuration: EnvironmentalParameterConfiguration) {
    this.configurations.push(configuration);

    this.configurations = [
      ...this.configurations
    ];
  }

  submit() {
    this.configurationService.createAll(this.configurations, this.activity.id!).subscribe(() => this.dialogRef.close());
  }

}

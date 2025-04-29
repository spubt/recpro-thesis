import {Component, Inject} from '@angular/core';
import {
  AbstractActivityParameter,
  Activity,
  ActivityParameterConfiguration,
  ActivityParameterConfigurationService, ActivityParameterModelingService
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {
  ActivityParameterConfigurationTableComponent
} from './activity-parameter-configuration-table/activity-parameter-configuration-table.component';
import {
  CreateActivityParameterConfigurationComponent
} from './create-activity-parameter-configuration/create-activity-parameter-configuration.component';

@Component({
  selector: 'app-assign-activity-parameters',
  imports: [
    MatModule,
    ActivityParameterConfigurationTableComponent,
    CreateActivityParameterConfigurationComponent
  ],
  templateUrl: './assign-activity-parameters.component.html',
  standalone: true,
  styleUrl: './assign-activity-parameters.component.scss'
})
export class AssignActivityParametersComponent {
  activityParameterConfigurations: ActivityParameterConfiguration[] = [];
  activityParameters: AbstractActivityParameter[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public activity: Activity,
    private configurationService: ActivityParameterConfigurationService,
    private activityParameterService: ActivityParameterModelingService,
    private dialogRef: MatDialogRef<AssignActivityParametersComponent>,
  ) {
    this.getData();
  }

  getData() {
    this.configurationService.getByActivityId(this.activity.id!).subscribe(res => {
      this.activityParameterConfigurations = res;
    });
    this.activityParameterService.getAll().subscribe(parameters => {
      this.activityParameters = parameters;
    });
  }

  addActivityParameterConfiguration(configuration: ActivityParameterConfiguration) {
    this.activityParameterConfigurations.push(configuration);

    this.activityParameterConfigurations = [
      ...this.activityParameterConfigurations
    ];
  }

  submit() {
    this.configurationService.createAll(this.activityParameterConfigurations, this.activity.id!).subscribe(() => {
      this.dialogRef.close();
    });
  }
}

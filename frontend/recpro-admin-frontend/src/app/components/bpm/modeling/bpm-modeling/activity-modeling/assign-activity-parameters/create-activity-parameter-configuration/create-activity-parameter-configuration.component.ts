import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  AbstractActivityParameter,
  Activity,
  ActivityParameterConfiguration,
  ActivityParameterConfigurationType
} from '@recprocess/recpro-frontend-lib';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../../../../../../util/mat/mat.module';

@Component({
  selector: 'app-create-activity-parameter-configuration',
  imports: [
    MatModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './create-activity-parameter-configuration.component.html',
  standalone: true,
  styleUrl: './create-activity-parameter-configuration.component.scss'
})
export class CreateActivityParameterConfigurationComponent {

  @Input() activityParameters: AbstractActivityParameter[] = [];
  @Input() activity: Activity = new Activity();

  @Output() selectedActivityParameterChange = new EventEmitter<ActivityParameterConfiguration>();

  selectedActivityParameter: AbstractActivityParameter = new AbstractActivityParameter();
  activityParameterConfiguration: ActivityParameterConfiguration = new ActivityParameterConfiguration();

  addActivityParameterConfiguration() {
    if (this.selectedActivityParameter) {
      this.activityParameterConfiguration.parameter = this.selectedActivityParameter;
      this.activityParameterConfiguration.activity = this.activity;
      this.selectedActivityParameterChange.emit(this.activityParameterConfiguration);
      this.selectedActivityParameter = new AbstractActivityParameter();
      this.activityParameterConfiguration = new ActivityParameterConfiguration();
    }
  }

  protected readonly ActivityParameterConfigurationType = ActivityParameterConfigurationType;
}

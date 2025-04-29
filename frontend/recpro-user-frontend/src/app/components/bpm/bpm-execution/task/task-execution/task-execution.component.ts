import {Component, Input} from '@angular/core';
import {
  AbstractActivityParameter,
  AbstractActivityParameterInstance, ActivityParameterConfiguration, ActivityParameterConfigurationType,
} from '@recprocess/recpro-frontend-lib';
import {NgForOf, NgIf} from '@angular/common';
import {
  ActivityParameterExecutionComponent
} from '../../../../erc-data/execution/activity-parameter-execution/activity-parameter-execution.component';

@Component({
  selector: 'app-task-execution',
  imports: [
    ActivityParameterExecutionComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './task-execution.component.html',
  standalone: true,
  styleUrl: './task-execution.component.scss'
})
export class TaskExecutionComponent {

  @Input() activityParameterConfigurations: ActivityParameterConfiguration[] = [];
  @Input() activityParameterInstances: AbstractActivityParameterInstance[] = [];
  @Input() executable: boolean = false;

  getActivityParameterInstanceByActivityParameterId(parameter: AbstractActivityParameter) {
    return this.activityParameterInstances.find(instance => instance.activityParameter.id === parameter.id)!;
  }

  log() {
    console.log(this.activityParameterInstances)
  }

  protected readonly ActivityParameterConfigurationType = ActivityParameterConfigurationType;
}

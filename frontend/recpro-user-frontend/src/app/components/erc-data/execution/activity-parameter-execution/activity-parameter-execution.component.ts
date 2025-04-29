import {Component, Input} from '@angular/core';
import {
  AbstractActivityParameter,
  AbstractActivityParameterInstance, BinaryActivityParameter, BinaryActivityParameterInstance,
  DateActivityParameter,
  DateActivityParameterInstance,
  NumericActivityParameter,
  NumericActivityParameterInstance,
  ParameterType,
  TextualActivityParameter,
  TextualActivityParameterInstance
} from '@recprocess/recpro-frontend-lib';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import {TextualActivityParameterComponent} from './textual-activity-parameter/textual-activity-parameter.component';
import {NumericActivityParameterComponent} from './numeric-activity-parameter/numeric-activity-parameter.component';
import {DateActivityParameterComponent} from './date-activity-parameter/date-activity-parameter.component';
import {BinaryActivityParameterComponent} from './binary-activity-parameter/binary-activity-parameter.component';

@Component({
  selector: 'app-activity-parameter-execution',
  imports: [
    NgSwitch,
    NgSwitchCase,
    TextualActivityParameterComponent,
    NumericActivityParameterComponent,
    DateActivityParameterComponent,
    BinaryActivityParameterComponent
  ],
  templateUrl: './activity-parameter-execution.component.html',
  standalone: true,
  styleUrl: './activity-parameter-execution.component.scss'
})
export class ActivityParameterExecutionComponent {

  @Input() activityParameter: AbstractActivityParameter = new AbstractActivityParameter();
  @Input() activityParameterInstance: AbstractActivityParameterInstance = new AbstractActivityParameterInstance();
  @Input() executable: boolean = false;

  getActivityParameterType(): ParameterType {
    return this.activityParameter.parameterType;
  }

  getTextualActivityParameter(): TextualActivityParameter {
    return this.activityParameter as TextualActivityParameter;
  }

  getTextualActivityParameterInstance(): TextualActivityParameterInstance {
    return this.activityParameterInstance as TextualActivityParameterInstance;
  }

  getNumericActivityParameter(): NumericActivityParameter {
    return this.activityParameter as NumericActivityParameter;
  }

  getNumericActivityParameterInstance(): NumericActivityParameterInstance {
    return this.activityParameterInstance as NumericActivityParameterInstance;
  }

  getDateActivityParameter(): DateActivityParameter {
    return this.activityParameter as DateActivityParameter;
  }

  getDateActivityParameterInstance(): DateActivityParameterInstance {
    return this.activityParameterInstance as DateActivityParameterInstance;
  }

  getBinaryActivityParameter(): BinaryActivityParameter {
    return this.activityParameter as BinaryActivityParameter;
  }

  getBinaryActivityParameterInstance(): BinaryActivityParameterInstance {
    return this.activityParameterInstance as BinaryActivityParameterInstance;
  }

  protected readonly ParameterType = ParameterType;
}

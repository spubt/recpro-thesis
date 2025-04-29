import {Activity} from '../../../../bpm/modeling';
import {AbstractActivityParameter} from '../../../../erc-data';
import {ActivityParameterConfigurationType} from './ActivityParameterConfigurationType';

export class ActivityParameterConfiguration {

  id: string | undefined;
  activity: Activity = new Activity();
  parameter: AbstractActivityParameter = new AbstractActivityParameter();
  parameterConfigurationType: ActivityParameterConfigurationType = ActivityParameterConfigurationType.OUTPUT;
  position: number = -1;
  width: number = 0;
  height: number = 0;

}

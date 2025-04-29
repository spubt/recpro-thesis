import {Activity} from '../../../../bpm/modeling';
import {AbstractEnvironmentalParameter} from '../../../../erc-data';

export class EnvironmentalParameterConfiguration {
  id: string | undefined;
  activity: Activity = new Activity();
  parameter: AbstractEnvironmentalParameter = new AbstractEnvironmentalParameter();
  source: string = '';
}

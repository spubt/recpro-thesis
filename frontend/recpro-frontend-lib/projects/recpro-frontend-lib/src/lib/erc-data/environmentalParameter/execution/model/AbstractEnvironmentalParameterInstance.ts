import {ParameterType} from '../../../activityParameter';
import {AbstractEnvironmentalParameter} from '../../modeling';
import {RecproTaskInstance} from '../../../../bpm/execution';

export class AbstractEnvironmentalParameterInstance {
  id: string | undefined;
  parameterType: ParameterType = ParameterType.TEXTUAL;
  environmentalParameter: AbstractEnvironmentalParameter = new AbstractEnvironmentalParameter();
  recproTaskInstance: RecproTaskInstance = new RecproTaskInstance();
}

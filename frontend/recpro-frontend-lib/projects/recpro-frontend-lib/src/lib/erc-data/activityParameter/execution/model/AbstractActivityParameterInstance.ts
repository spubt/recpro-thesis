import {ParameterType} from '../../ParameterType';
import {AbstractActivityParameter, BinaryActivityParameter} from '../../modeling';
import {RecproTaskInstance} from '../../../../bpm/execution';

export class AbstractActivityParameterInstance {
  id: string | undefined = undefined;
  parameterType: ParameterType = ParameterType.BINARY;

  activityParameter: AbstractActivityParameter = new BinaryActivityParameter();

  recproTaskInstance: RecproTaskInstance = new RecproTaskInstance();
}

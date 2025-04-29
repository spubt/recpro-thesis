import {ParameterType} from '../../ParameterType';

export class AbstractActivityParameter {
  id: string | undefined = undefined;
  label: string = '';
  description: string = '';
  bpmsAttributeId: string = '';
  parameterType: ParameterType = ParameterType.BINARY;
}

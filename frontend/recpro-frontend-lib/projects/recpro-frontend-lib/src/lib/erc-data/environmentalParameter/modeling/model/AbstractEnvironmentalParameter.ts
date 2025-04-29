import {ParameterType} from '../../../activityParameter';

export class AbstractEnvironmentalParameter {
  id: string | undefined;
  label: string = '';
  description: string = '';
  source: string = '';
  bpmsAttributeId: string = '';
  visibility: string = '';
  parameterType: ParameterType = ParameterType.TEXTUAL;
}

import {AbstractEnvironmentalParameter, ParameterType} from '../../../../erc-data';

export class AbstractEnvParamUserCriteria {
  parameter: AbstractEnvironmentalParameter = new AbstractEnvironmentalParameter();
  parameterType: ParameterType = ParameterType.NUMERIC;
}

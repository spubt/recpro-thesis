import {AbstractEnvParamUserCriteria} from './AbstractEnvParamUserCriteria';

export class EnvParamNumericUserCriteria extends AbstractEnvParamUserCriteria {
  minValue: number = 0;
  maxValue: number = 0;
  value: number = 0;
}

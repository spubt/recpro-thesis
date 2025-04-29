import {AbstractEnvParamUserCriteria} from './AbstractEnvParamUserCriteria';

export class EnvParamDateUserCriteria extends AbstractEnvParamUserCriteria {
  minDate: Date = new Date();
  maxDate: Date = new Date();
  date: Date = new Date();
}

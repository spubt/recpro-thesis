import {AbstractActParamUserCriteria} from './AbstractActParamUserCriteria';

export class ActParamNumericUserCriteria extends AbstractActParamUserCriteria {
  minValue: number = 0;
  maxValue: number = 0;
  value: number = 0;
}

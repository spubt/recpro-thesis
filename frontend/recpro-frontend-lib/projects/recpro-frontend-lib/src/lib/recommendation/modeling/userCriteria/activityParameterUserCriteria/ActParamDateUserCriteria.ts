import {AbstractActParamUserCriteria} from './AbstractActParamUserCriteria';

export class ActParamDateUserCriteria extends AbstractActParamUserCriteria {
  minDate: Date = new Date();
  maxDate: Date = new Date();
  date: Date = new Date();
}

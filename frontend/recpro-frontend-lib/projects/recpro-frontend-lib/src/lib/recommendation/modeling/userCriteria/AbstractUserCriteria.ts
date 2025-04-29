import {UserCriteriaType} from './UserCriteriaType';

export class AbstractUserCriteria {
  id: string | undefined;
  criteriaType: UserCriteriaType = UserCriteriaType.ACTIVITY_PARAMETER;
}

import {UserCriteriaType} from '../../modeling';
import {ComparisonType} from './ComparisonType';

export class AbstractUserCriteriaInstance {
  id: string | undefined;
  criteriaType: UserCriteriaType = UserCriteriaType.META_ATTRIBUTE;
  comparisonType: ComparisonType = ComparisonType.EQUAL;

}

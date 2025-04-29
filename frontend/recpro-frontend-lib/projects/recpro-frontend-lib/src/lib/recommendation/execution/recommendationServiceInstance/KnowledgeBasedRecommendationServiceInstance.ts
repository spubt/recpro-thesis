import {AbstractRecommendationServiceInstance} from './AbstractRecommendationServiceInstance';
import {
  AbstractActParamUserCriteria,
  AbstractEnvParamUserCriteria,
  AbstractUserCriteria,
  MetaAttributeUserCriteria
} from '../../modeling';
import {
  AbstractActParamUserCriteriaInstance, AbstractEnvParamUserCriteriaInstance,
  AbstractUserCriteriaInstance,
  MetaAttributeUserCriteriaInstance
} from '../userCriteriaInstance';
import {OrderBy} from './OrderBy';
import {OrderDirection} from './OrderDirection';

export class KnowledgeBasedRecommendationServiceInstance extends AbstractRecommendationServiceInstance {
  orderBy: OrderBy = OrderBy.DATE;
  orderDirection: OrderDirection = OrderDirection.DESC;
  actParamUserCriteria: AbstractActParamUserCriteria[] = [];
  actParamUserCriteriaInstance: AbstractActParamUserCriteriaInstance[] = [];

  envParamUserCriteria: AbstractEnvParamUserCriteria[] = []
  envParamUserCriteriaInstance: AbstractEnvParamUserCriteriaInstance[] = []

  metaAttributeUserCriteria: MetaAttributeUserCriteria[] = [];
  metaAttributeUserCriteriaInstance: MetaAttributeUserCriteriaInstance[] = []
}

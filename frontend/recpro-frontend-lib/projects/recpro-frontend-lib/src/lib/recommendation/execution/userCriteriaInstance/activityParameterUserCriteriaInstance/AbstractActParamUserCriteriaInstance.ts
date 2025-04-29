import {AbstractUserCriteriaInstance} from '../AbstractUserCriteriaInstance';
import {AbstractActParamUserCriteria,} from '../../../modeling';
import {ParameterType} from '../../../../erc-data';

export class AbstractActParamUserCriteriaInstance extends AbstractUserCriteriaInstance {
  userCriteria: AbstractActParamUserCriteria = new AbstractActParamUserCriteria();
  parameterType: ParameterType = ParameterType.NUMERIC;
}

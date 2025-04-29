import {AbstractUserCriteriaInstance} from '../AbstractUserCriteriaInstance';
import {AbstractEnvParamUserCriteria} from '../../../modeling';
import {ParameterType} from '../../../../erc-data';

export class AbstractEnvParamUserCriteriaInstance extends AbstractUserCriteriaInstance {
  userCriteria: AbstractEnvParamUserCriteria = new AbstractEnvParamUserCriteria();
  parameterType: ParameterType = ParameterType.NUMERIC;
}

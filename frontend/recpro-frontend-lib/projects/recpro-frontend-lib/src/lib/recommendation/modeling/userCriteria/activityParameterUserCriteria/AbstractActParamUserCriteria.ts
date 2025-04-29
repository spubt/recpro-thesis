import {AbstractUserCriteria} from '../AbstractUserCriteria';
import {AbstractActivityParameter, ParameterType} from '../../../../erc-data';

export class AbstractActParamUserCriteria extends AbstractUserCriteria {
  parameter: AbstractActivityParameter = new AbstractActivityParameter();
  parameterType: ParameterType = ParameterType.NUMERIC;
}

import {RecommendationDimension} from './RecommendationDimension';
import {AbstractActivityParameter, ParameterType} from '../../../../erc-data';

export class ActivityParameterRecommendationDimension extends RecommendationDimension {
  activityParameter: AbstractActivityParameter = new AbstractActivityParameter();
}

import {RecommendationDimension} from './RecommendationDimension';
import {AbstractEnvironmentalParameter, ParameterType} from '../../../../erc-data';

export class EnvironmentalParameterRecommendationDimension extends RecommendationDimension {
  environmentalParameter: AbstractEnvironmentalParameter = new AbstractEnvironmentalParameter();
}

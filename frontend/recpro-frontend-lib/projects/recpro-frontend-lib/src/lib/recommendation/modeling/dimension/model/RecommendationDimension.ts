import {RecommendationDimensionRange} from '../../range';
import {RecommendationDimensionType} from './RecommendationDimensionType';
import {ParameterType} from '../../../../erc-data';

export class RecommendationDimension {
  id: string | undefined;
  label: string = '';
  ranges: RecommendationDimensionRange[] = [];
  dimensionType: RecommendationDimensionType = RecommendationDimensionType.ACTIVITY_PARAMETER;
  parameterType: ParameterType = ParameterType.TEXTUAL;
}

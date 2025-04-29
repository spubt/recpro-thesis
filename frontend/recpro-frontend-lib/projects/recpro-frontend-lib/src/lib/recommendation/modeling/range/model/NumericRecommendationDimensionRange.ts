import {RecommendationDimensionRange} from './RecommendationDimensionRange';
import {RecommendationDimensionRangeType} from './RecommendationDimensionRangeType';

export class NumericRecommendationDimensionRange extends RecommendationDimensionRange {
  lowerBound: number = 0;
  upperBound: number = 0;
  override rangeType = RecommendationDimensionRangeType.NUMERIC;
}

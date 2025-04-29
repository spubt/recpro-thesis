import {RecommendationDimensionRange} from './RecommendationDimensionRange';
import {RecommendationDimensionRangeType} from './RecommendationDimensionRangeType';

export class DateRecommendationDimensionRange extends RecommendationDimensionRange {
  lowerBound: Date = new Date();
  upperBound: Date = new Date();
  override rangeType = RecommendationDimensionRangeType.DATE;
}

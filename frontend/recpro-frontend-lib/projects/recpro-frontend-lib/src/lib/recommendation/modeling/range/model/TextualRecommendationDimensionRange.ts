import {RecommendationDimensionRange} from './RecommendationDimensionRange';
import {RecommendationDimensionRangeType} from './RecommendationDimensionRangeType';

export class TextualRecommendationDimensionRange extends RecommendationDimensionRange {
  value: string = '';
  override rangeType = RecommendationDimensionRangeType.TEXTUAL;
}

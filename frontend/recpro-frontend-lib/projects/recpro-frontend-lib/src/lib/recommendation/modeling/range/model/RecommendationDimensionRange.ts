import {RecommendationDimensionRangeType} from './RecommendationDimensionRangeType';

export class RecommendationDimensionRange {
  id: string | undefined;
  label: string = '';
  rangeType: RecommendationDimensionRangeType = RecommendationDimensionRangeType.NUMERIC;
}

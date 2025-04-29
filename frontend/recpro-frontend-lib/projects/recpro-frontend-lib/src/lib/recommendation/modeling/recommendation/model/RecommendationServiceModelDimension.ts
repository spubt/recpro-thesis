import {RecommendationDimension} from '../../dimension';

export class RecommendationServiceModelDimension {
  id: string | undefined;

  recommendationDimension: RecommendationDimension = new RecommendationDimension();
  weight: number = 0;
}

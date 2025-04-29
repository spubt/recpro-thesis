import {RecommendationServiceModelType} from './RecommendationServiceModelType';
import {RecommendationServiceModelDimension} from './RecommendationServiceModelDimension';

export class RecommendationServiceModel {
  id: string | undefined;
  name: string = '';
  description: string = '';
  url: string = '';
  recommendationType: RecommendationServiceModelType = RecommendationServiceModelType.BASE;

  dimensions: RecommendationServiceModelDimension[] = [];
}

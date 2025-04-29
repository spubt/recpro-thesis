import {RecommendationServiceModel, RecommendationServiceModelType} from '../../modeling';

export class AbstractRecommendationServiceInstance {
  id: string | undefined;
  recommendationService: RecommendationServiceModel = new RecommendationServiceModel();
  recommendationServiceType: RecommendationServiceModelType = RecommendationServiceModelType.BASE;

}

import {RecproTasklistEntry} from './RecproTasklistEntry';
import {AbstractRecommendationServiceInstance, RecommendationServiceModel} from '../../../recommendation';

export class RecproTasklist {
  id: string | undefined = undefined;
  userId: string = '';
  entries: RecproTasklistEntry[] = [];
  recommendationServiceInstance: AbstractRecommendationServiceInstance | undefined;
  createdAt: Date = new Date();
  recommendationServiceModel: RecommendationServiceModel | undefined;
}

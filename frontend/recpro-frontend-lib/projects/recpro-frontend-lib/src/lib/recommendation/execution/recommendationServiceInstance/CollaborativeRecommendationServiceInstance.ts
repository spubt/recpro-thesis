import {AbstractRecommendationServiceInstance} from './AbstractRecommendationServiceInstance';
import {FeedbackInstance} from '../../../feedback/execution';

export class CollaborativeRecommendationServiceInstance extends AbstractRecommendationServiceInstance {
  feedbackInstances: FeedbackInstance[] = [];
}

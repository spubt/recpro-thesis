import {AbstractRecommendationServiceInstance} from './AbstractRecommendationServiceInstance';
import {FeedbackInstance} from '../../../feedback/execution';
import {AbstractActivityParameter, AbstractEnvironmentalParameter, MetaAttribute} from '../../../erc-data';

export class ContentBasedRecommendationServiceInstance extends AbstractRecommendationServiceInstance {
  feedbackInstances: FeedbackInstance[] = [];
  metaAttributes: MetaAttribute[] = [];
  activityParameters: AbstractActivityParameter[] = [];
  environmentalParameters: AbstractEnvironmentalParameter[] = [];
}

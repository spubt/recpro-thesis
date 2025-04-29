import {Feedback, RecommendationServiceModel} from '@recprocess/recpro-frontend-lib';

export class RecommendationAnalysis {
  id: string;
  label: string;
  description: string;
  recommendationService: RecommendationServiceModel;
  feedback: Feedback;
  data: number[];

}

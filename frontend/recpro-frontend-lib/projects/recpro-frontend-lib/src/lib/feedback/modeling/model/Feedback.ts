import {FeedbackType} from './FeedbackType';
import {FeedbackLabelType} from './FeedbackLabelType';

export class Feedback {
  id: string | undefined = undefined;
  label: string = '';
  description: string = '';

  feedbackType: FeedbackType = FeedbackType.BINARY;
  labelType: FeedbackLabelType = FeedbackLabelType.TEXT;
  active: boolean = false;
}

import {Feedback, FeedbackType, OrdinalOption} from '../../modeling';
import {User} from '../../../user';
import {RecproTasklistEntry} from '../../../bpm/execution';

export class FeedbackInstance {
  id: string | undefined = undefined;
  user: User = new User();
  tasklistEntry: RecproTasklistEntry = new RecproTasklistEntry();
  feedback: Feedback = new Feedback();
  feedbackType: FeedbackType = FeedbackType.BINARY;
  timestamp: Date = new Date();
}

export class BinaryFeedbackInstance extends FeedbackInstance {
  value: boolean = false;
}

export class ContinuousFeedbackInstance extends FeedbackInstance {
  value: number = 0;
  override feedbackType: FeedbackType = FeedbackType.CONTINUOUS;
}

export class IntervalBasedFeedbackInstance extends FeedbackInstance {
  value: number = 0;
  override feedbackType: FeedbackType = FeedbackType.INTERVAL_BASED;
}

export class OrdinalFeedbackInstance extends FeedbackInstance {
  value: OrdinalOption = new OrdinalOption();
  override feedbackType: FeedbackType = FeedbackType.ORDINAL;
}

export class UnaryFeedbackInstance extends FeedbackInstance {
  value: boolean = false;
  override feedbackType: FeedbackType = FeedbackType.UNARY;
}

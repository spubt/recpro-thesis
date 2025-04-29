import { Injectable } from '@angular/core';
import {BinaryFeedback, Feedback, FeedbackType, IntervalBasedFeedback, OrdinalFeedback} from '../modeling';
import {
  BinaryFeedbackInstance,
  IntervalBasedFeedbackInstance,
  OrdinalFeedbackInstance,
  FeedbackInstance
} from '../execution';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }


  isBinaryFeedback(feedback: Feedback): boolean {
    return feedback.feedbackType === FeedbackType.BINARY;
  }

  getBinaryFeedback(feedback: Feedback): BinaryFeedback {
    return feedback as BinaryFeedback;
  }

  getBinaryFeedbackInstance(feedbackInstance: FeedbackInstance) {
    return feedbackInstance as BinaryFeedbackInstance;
  }

  isOrdinalFeedback(feedback: Feedback): boolean {
    return feedback.feedbackType === FeedbackType.ORDINAL;
  }

  getOrdinalFeedback(feedback: Feedback): OrdinalFeedback {
    return feedback as OrdinalFeedback;
  }

  getOrdinalFeedbackInstance(feedbackInstance: FeedbackInstance) {
    return feedbackInstance as OrdinalFeedbackInstance;
  }

  isIntervalBasedFeedback(feedback: Feedback): boolean {
    return feedback.feedbackType === FeedbackType.INTERVAL_BASED;
  }

  getIntervalBasedFeedback(feedback: Feedback): IntervalBasedFeedback {
    return feedback as IntervalBasedFeedback;
  }

  getIntervalBasedFeedbackInstance(feedbackInstance: FeedbackInstance) {
    return feedbackInstance as IntervalBasedFeedbackInstance;
  }
}

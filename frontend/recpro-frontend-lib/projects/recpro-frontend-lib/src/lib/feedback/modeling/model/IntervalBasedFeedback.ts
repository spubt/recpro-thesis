import {Feedback} from './Feedback';

export class IntervalBasedFeedback extends Feedback {
  minValue: number = 0;
  maxValue: number = 10;
  stepSize: number = 1;
  defaultValue: number = 5;
}

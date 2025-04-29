import {Feedback} from './Feedback';

export class BinaryFeedback extends Feedback {
  trueLabel: string = '';
  falseLabel: string = '';
  defaultValue: boolean = false;
}

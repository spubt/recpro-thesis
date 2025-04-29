import {Feedback} from './Feedback';
import {OrdinalOption} from './OrdinalOption';

export class OrdinalFeedback extends Feedback {
  defaultValue: number = 0;
  options: OrdinalOption[] = [];
}

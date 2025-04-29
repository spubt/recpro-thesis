import {ExplanationType} from './ExplanationType';

export class AbstractExplanationInstance {
  id: string | undefined;
  explanationType: ExplanationType = ExplanationType.POTENTIAL_FEEDBACK;
}

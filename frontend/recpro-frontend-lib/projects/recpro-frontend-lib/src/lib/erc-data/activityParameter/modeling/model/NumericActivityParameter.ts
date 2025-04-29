import {AbstractActivityParameter} from './AbstractActivityParameter';

export class NumericActivityParameter extends AbstractActivityParameter {
  defaultValue: number = -1;
  minValue: number = -1;
  maxValue: number = -1;
}

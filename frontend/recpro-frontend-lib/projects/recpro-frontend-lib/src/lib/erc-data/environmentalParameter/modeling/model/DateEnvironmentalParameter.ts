import {AbstractEnvironmentalParameter} from './AbstractEnvironmentalParameter';

export class DateEnvironmentalParameter extends AbstractEnvironmentalParameter {
  defaultValue: Date = new Date();
}

import { Injectable } from '@angular/core';
import {
  AbstractEnvironmentalParameter,
  BinaryEnvironmentalParameter,
  DateEnvironmentalParameter, NumericEnvironmentalParameter,
  TextualEnvironmentalParameter
} from '../model';
import {ParameterType} from '../../../activityParameter';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentalParameterService {

  constructor() { }

  isBinaryParameter(parameter: AbstractEnvironmentalParameter): boolean {
    return parameter.parameterType === ParameterType.BINARY;
  }

  getBinaryParameter(parameter: AbstractEnvironmentalParameter): BinaryEnvironmentalParameter {
    return parameter as BinaryEnvironmentalParameter;
  }

  isDateParameter(parameter: AbstractEnvironmentalParameter): boolean {
    return parameter.parameterType === ParameterType.DATE;
  }

  getDateParameter(parameter: AbstractEnvironmentalParameter): DateEnvironmentalParameter {
    return parameter as DateEnvironmentalParameter;
  }

  isNumericParameter(parameter: AbstractEnvironmentalParameter): boolean {
    return parameter.parameterType === ParameterType.NUMERIC;
  }

  getNumericParameter(parameter: AbstractEnvironmentalParameter): NumericEnvironmentalParameter {
    return parameter as NumericEnvironmentalParameter;
  }

  isTextualParameter(parameter: AbstractEnvironmentalParameter): boolean {
    return parameter.parameterType === ParameterType.TEXTUAL;
  }

  getTextualParameter(parameter: AbstractEnvironmentalParameter): TextualEnvironmentalParameter {
    return parameter as TextualEnvironmentalParameter;
  }
}

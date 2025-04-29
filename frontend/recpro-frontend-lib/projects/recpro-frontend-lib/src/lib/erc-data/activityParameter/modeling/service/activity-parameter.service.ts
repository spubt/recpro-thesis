import {Injectable} from '@angular/core';
import {
  AbstractActivityParameter,
  BinaryActivityParameter,
  ComplexActivityParameter,
  DateActivityParameter, NumericActivityParameter, TextualActivityParameter
} from '../model';
import {ParameterType} from '../../ParameterType';

@Injectable({
  providedIn: 'root'
})
export class ActivityParameterService {

  constructor() { }

  isBinaryParameter(parameter: AbstractActivityParameter): boolean {
    return parameter.parameterType === ParameterType.BINARY;
  }

  getBinaryParameter(parameter: AbstractActivityParameter): BinaryActivityParameter {
    return parameter as BinaryActivityParameter;
  }

  isComplexParameter(parameter: AbstractActivityParameter): boolean {
    return parameter.parameterType === ParameterType.COMPLEX;
  }

  getComplexParameter(parameter: AbstractActivityParameter): ComplexActivityParameter {
    return parameter as ComplexActivityParameter;
  }

  isDateParameter(parameter: AbstractActivityParameter): boolean {
    return parameter.parameterType === ParameterType.DATE;
  }

  getDateParameter(parameter: AbstractActivityParameter): DateActivityParameter {
    return parameter as DateActivityParameter;
  }

  isNumericParameter(parameter: AbstractActivityParameter): boolean {
    return parameter.parameterType === ParameterType.NUMERIC;
  }

  getNumericParameter(parameter: AbstractActivityParameter): NumericActivityParameter {
    return parameter as NumericActivityParameter;
  }

  isTextualParameter(parameter: AbstractActivityParameter): boolean {
    return parameter.parameterType === ParameterType.TEXTUAL;
  }

  getTextualParameter(parameter: AbstractActivityParameter): TextualActivityParameter {
    return parameter as TextualActivityParameter;
  }
}

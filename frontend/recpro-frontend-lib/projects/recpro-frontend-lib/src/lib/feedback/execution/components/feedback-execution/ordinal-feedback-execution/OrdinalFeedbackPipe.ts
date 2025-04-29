import {Pipe, PipeTransform} from '@angular/core';
import {OrdinalOption} from '../../../../modeling';

@Pipe({standalone: true, name: 'sortOrdinalOptions'})
export class SortTasklistPipe implements PipeTransform {
  transform(value: OrdinalOption[]): OrdinalOption[] {
    return value.sort((a,b) => a.position - b.position);
  }
}

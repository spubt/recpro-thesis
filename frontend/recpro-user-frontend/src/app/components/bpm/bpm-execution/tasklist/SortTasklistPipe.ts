import {Pipe, PipeTransform} from "@angular/core";
import {RecproTasklistEntry} from '@recprocess/recpro-frontend-lib';


@Pipe({standalone: true, name: 'sortTasklistByPosition'})
export class SortTasklistPipe implements PipeTransform {
  transform(value: RecproTasklistEntry[]): RecproTasklistEntry[] {
    return value.sort((a,b) => a.position - b.position);
  }
}

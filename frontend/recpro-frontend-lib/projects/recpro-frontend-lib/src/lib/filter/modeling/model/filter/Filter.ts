import {FilterType} from './FilterType';

export class Filter {
  id: string | undefined = undefined;
  name: string = '';
  description: string = '';
  filterUrl: string = '';
  display: boolean = false;
  filterType: FilterType = FilterType.BASE;
}

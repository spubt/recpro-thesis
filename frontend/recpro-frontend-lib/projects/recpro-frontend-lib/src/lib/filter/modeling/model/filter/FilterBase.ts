import {Filter} from './Filter';
import {FilterType} from './FilterType';
import {WorklistOrder} from './WorklistOrder';

export class FilterBase extends Filter {
  override filterType: FilterType = FilterType.BASE;
  ascending: boolean = false;
  worklistOrder = WorklistOrder.CREATE_DATE;
}

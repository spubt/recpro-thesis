import {FilterType} from './FilterType';
import {Filter} from './Filter';

export class CollaborativeFilter extends Filter {
  override filterType: FilterType = FilterType.COLLABORATIVE;
}

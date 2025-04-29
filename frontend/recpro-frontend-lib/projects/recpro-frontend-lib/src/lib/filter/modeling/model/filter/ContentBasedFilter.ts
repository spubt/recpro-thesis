import {Filter} from './Filter';
import {FilterType} from './FilterType';

export class ContentBasedFilter extends Filter {
  override filterType: FilterType = FilterType.CONTENT_BASED;
}

import {Filter} from './Filter';
import {FilterType} from './FilterType';

export class KnowledgeBasedFilter extends Filter {
  override filterType: FilterType = FilterType.KNOWLEDGE_BASED;
}

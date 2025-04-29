import {Activity} from '../../../../bpm/modeling';
import {MetaAttribute} from '../../../../erc-data';

export class MetaAttributeConfiguration {
  id: string | undefined = undefined;
  activity: Activity = new Activity();
  metaAttribute: MetaAttribute = new MetaAttribute();
}

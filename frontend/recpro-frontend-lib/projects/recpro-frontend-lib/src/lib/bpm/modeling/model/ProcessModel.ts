import {Activity} from './Activity';
import {BpmRole} from './BpmRole';

export class ProcessModel {
  id: string | undefined= undefined;
  name: string = '';
  description: string = '';
  bpmsElementId: string = '';
  xml: string = '';
  activities: Activity[] = [];
  roles: BpmRole[] = [];
}

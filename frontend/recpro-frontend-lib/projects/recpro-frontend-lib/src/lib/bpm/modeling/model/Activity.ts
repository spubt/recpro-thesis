import {BpmRole} from './BpmRole';

export class Activity {
  id: string | undefined = undefined;
  name: string = '';
  description: string = '';
  bpmsElementId: string = '';
  roles: BpmRole[] = [];
}

import {Activity} from '../../modeling';
import {RecproTaskInstanceState} from './RecproTaskInstanceState';
import {RecproProcessInstance} from './RecproProcessInstance';

export class RecproTaskInstance {
  id: string | undefined = undefined;
  bpmsTaskInstanceId: string = '';
  description: string = '';
  activity: Activity = new Activity();
  recproProcessInstance: RecproProcessInstance = new RecproProcessInstance();
  assigneeId: string = '';
  createTime: Date = new Date();
  startTime: Date = new Date();
  endTime: Date = new Date();
  state: RecproTaskInstanceState = RecproTaskInstanceState.PENDING;
}

import {RecproProcessInstanceState} from './RecproProcessInstanceState';
import {RecproTaskInstance} from './RecproTaskInstance';
import {Process} from '../../modeling';

export class RecproProcessInstance {
  id: string | undefined = undefined;
  bpmsProcessInstanceId: string = '';
  process: Process = new Process();
  description: string = '';
  startTime: Date = new Date();
  endTime: Date = new Date();
  state: RecproProcessInstanceState = RecproProcessInstanceState.IN_PROGRESS;
  startedBy: string = '';
  recproTaskInstance: RecproTaskInstance[] = [];
}

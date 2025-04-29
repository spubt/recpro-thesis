import {ProcessModel} from './ProcessModel';
import {ProcessStatus} from './ProcessStatus';

export class Process {
  id: string | undefined = undefined;
  name: string = '';
  description: string = '';
  bpmsElementId: string = '';
  version: string = '';
  processKey: string = '';
  latest: boolean = true;
  processModel: ProcessModel = new ProcessModel();
  createdAt: Date = new Date();
  lastModifiedAt: Date = new Date();
  status: ProcessStatus = ProcessStatus.ACTIVE;
  author: string = '';
  defaultPriority: number = 50;
}

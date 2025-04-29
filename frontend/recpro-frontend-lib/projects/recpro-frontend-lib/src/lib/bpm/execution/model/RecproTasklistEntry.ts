import {RecproTasklist} from './RecproTasklist';
import {RecproTaskInstance} from './RecproTaskInstance';
import {AbstractActivityParameterInstance} from '../../../erc-data';
import {
  AbstractEnvironmentalParameterInstance
} from '../../../erc-data';
import {AbstractExplanationInstance} from '../../../explanation';

export class RecproTasklistEntry {

  id: string | undefined = undefined;
  recproTasklist: RecproTasklist = new RecproTasklist();

  recproTaskInstance: RecproTaskInstance = new RecproTaskInstance();
  explanation: AbstractExplanationInstance = new AbstractExplanationInstance();
  position: number = 0;
  priority: number = 0;

  activityParameterInstances: AbstractActivityParameterInstance[] = [];
  environmentalParameterInstances: AbstractEnvironmentalParameterInstance[] = [];

}

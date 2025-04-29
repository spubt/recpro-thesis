import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecproTaskInstance} from '../../../../bpm/execution';
import {Observable} from 'rxjs';
import {AbstractActivityParameterInstance} from '../model';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class ActivityParameterExecutionService {

  constructor(
    private http: HttpClient,
  ) { }

  initialize(taskInstance: RecproTaskInstance): Observable<AbstractActivityParameterInstance[]> {
    return this.http.post<AbstractActivityParameterInstance[]>(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_EXECUTION + ApiConstants.INITIALIZE, taskInstance);
  }

  create(instance: AbstractActivityParameterInstance, recproTaskInstanceId: string): Observable<AbstractActivityParameterInstance> {
    return this.http.post<AbstractActivityParameterInstance>(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_EXECUTION + ApiConstants.CREATE + '?recproTaskInstanceId=' + recproTaskInstanceId, instance);
  }

  createAll(instances: AbstractActivityParameterInstance[], recproTaskInstanceId: string): Observable<AbstractActivityParameterInstance[]> {
    return this.http.post<AbstractActivityParameterInstance[]>(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_EXECUTION + ApiConstants.CREATE_ALL+ '?recproTaskInstanceId=' + recproTaskInstanceId, instances);
  }
}

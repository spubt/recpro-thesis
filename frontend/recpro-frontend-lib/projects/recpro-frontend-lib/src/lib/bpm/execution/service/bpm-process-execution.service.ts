import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {RecproProcessInstance} from '../model';
import {ApiConstants} from '../../../util';

@Injectable({
  providedIn: 'root'
})
export class BpmProcessExecutionService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<RecproProcessInstance[]> {
    return this.http.get<RecproProcessInstance[]>(
      ApiConstants.BPM_PROCESS_EXECUTION + ApiConstants.GET_ALL
    ).pipe(take(1));
  }

  getByProcessInstanceId(processInstanceId: string): Observable<RecproProcessInstance> {
    return this.http.get<RecproProcessInstance>(
      ApiConstants.BPM_PROCESS_EXECUTION + processInstanceId
    ).pipe(take(1));
  }

  start(processId: string): Observable<RecproProcessInstance> {
    return this.http.post<RecproProcessInstance>(
      ApiConstants.BPM_PROCESS_EXECUTION + ApiConstants.START_ID + processId, null
    ).pipe(take(1));
  }
}

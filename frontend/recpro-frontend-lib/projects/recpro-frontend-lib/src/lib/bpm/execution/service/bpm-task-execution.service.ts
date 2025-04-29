import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, take} from 'rxjs';
import {RecproTaskInstance, RecproTasklist, RecproTasklistEntry} from '../model';
import {ApiConstants} from '../../../util';
import {BpmTasklistEntryExecutionService} from './bpm-tasklist-entry-execution.service';

@Injectable({
  providedIn: 'root'
})
export class BpmTaskExecutionService {

  private task: BehaviorSubject<RecproTaskInstance> = new BehaviorSubject<RecproTaskInstance>(new RecproTaskInstance);
  private currentTask: BehaviorSubject<RecproTaskInstance> = new BehaviorSubject(new RecproTaskInstance());

  constructor(
    private http: HttpClient,
    private tasklistEntryService: BpmTasklistEntryExecutionService
  ) { }

  private _getTaskInstance(): Observable<RecproTaskInstance> {
    return this.task;
  }

  private _setTaskInstance(task: RecproTaskInstance): void {
    this.task.next(task);
    this.currentTask.next(task);
    this.tasklistEntryService.getCurrentTasklistEntry().pipe(take(1)).subscribe(res => {
      res.recproTaskInstance = task;
      this.tasklistEntryService.setCurrentTasklistEntry(res);
    })
  }

  get(task: RecproTaskInstance): Observable<RecproTaskInstance> {
    this.http.get<RecproTaskInstance>(ApiConstants.BPM_TASK_EXECUTION + ApiConstants.GET + task.bpmsTaskInstanceId).subscribe(res => {
      this._setTaskInstance(res);
    });
    return this._getTaskInstance();
  }

  claim(tasklist: RecproTasklist, tasklistEntryId: string): Observable<any> {
    return this.http.post(ApiConstants.BPM_TASK_EXECUTION + ApiConstants.CLAIM_ID + tasklistEntryId, tasklist);
  }

  delete(task: RecproTaskInstance): Observable<any> {
    return this.http.delete(ApiConstants.BPM_TASK_EXECUTION + ApiConstants.DELETE_ID + task.bpmsTaskInstanceId);
  }

  assign(task: RecproTaskInstance, assigneeId: string): Observable<any> {
    return this.http.post(ApiConstants.BPM_TASK_EXECUTION + ApiConstants.ASSIGN_ID + task.bpmsTaskInstanceId, assigneeId);
  }

  complete(tasklist: RecproTasklist, tasklistEntryId: string): Observable<any> {
    return this.http.post<RecproTasklistEntry>(ApiConstants.BPM_TASK_EXECUTION + ApiConstants.COMPLETE_ID + tasklistEntryId, tasklist);
  }

  setPriority(task: RecproTaskInstance, priority: string): Observable<any> {
    return this.http.post(ApiConstants.BPM_TASK_EXECUTION + ApiConstants.SET_PRIORITY + task.bpmsTaskInstanceId, priority);
  }

  setCurrentTask(task: RecproTaskInstance): void {
    this.currentTask.next(task);
  }

  getCurrentTask(): Observable<RecproTaskInstance> {
    return this.currentTask;
  }
}

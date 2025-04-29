import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, take} from 'rxjs';
import {RecproTasklist} from '../model';
import {ApiConstants} from '../../../util';

@Injectable({
  providedIn: 'root'
})
export class BpmTasklistExecutionService {
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<RecproTasklist> {
    return this.http.get<RecproTasklist>(ApiConstants.BPM_TASKLIST_EXECUTION + ApiConstants.GET_ALL).pipe(take(1));
  }

  getById(id: string): Observable<RecproTasklist> {
    return this.http.get<RecproTasklist>(ApiConstants.BPM_TASKLIST_EXECUTION + ApiConstants.GET + id).pipe(take(1));
  }

  getByAssigneeId(assigneeId: string): Observable<RecproTasklist> {
    return this.http.get<RecproTasklist>(ApiConstants.BPM_TASKLIST_EXECUTION + ApiConstants.GET + ApiConstants.ASSIGNEE_ID + assigneeId).pipe(take(1));
  }
}

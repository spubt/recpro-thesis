import { Injectable } from '@angular/core';
import {Observable, take} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';
import {ApiConstants} from '../../../util';
import {Activity} from '../model/Activity';

@Injectable({
  providedIn: 'root'
})
export class BpmActivityModelingService {
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(ApiConstants.BPM_ACTIVITY_MODELING + ApiConstants.GET_ALL).pipe(take(1));
  }

  getById(id: string): Observable<Activity> {
    return this.http.get<Activity>(ApiConstants.BPM_ACTIVITY_MODELING + ApiConstants.GET + id).pipe(take(1));
  }

  getByIds(ids: string[]): Observable<Activity[]> {
    const params = new HttpParams().set('ids', ids.join(','));
    return this.http.get<Activity[]>(ApiConstants.BPM_ACTIVITY_MODELING + ApiConstants.GET_BY_IDS, { params }).pipe(take(1));
  }
}

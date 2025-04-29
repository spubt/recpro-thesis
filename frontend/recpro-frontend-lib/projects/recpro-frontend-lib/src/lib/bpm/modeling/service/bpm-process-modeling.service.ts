import {Injectable} from '@angular/core';
import {Observable, take} from 'rxjs';

import {HttpClient} from '@angular/common/http';

import {Process} from '../model/Process';
import {ApiConstants} from '../../../util';

@Injectable({
  providedIn: 'root'
})
export class BpmProcessModelingService {
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Process[]> {
    return this.http.get<Process[]>(ApiConstants.BPM_PROCESS_MODELING + ApiConstants.GET_ALL).pipe(take(1));
  }

  create(process: Process): Observable<Process> {
    return this.http.post<Process>(ApiConstants.BPM_PROCESS_MODELING + ApiConstants.CREATE, process).pipe(
      take(1)
    );
  }

  delete(process: Process) {
    return this.http.delete(ApiConstants.BPM_PROCESS_MODELING + ApiConstants.DELETE_ID + process.id).pipe(take(1));
  }
}

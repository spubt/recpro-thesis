import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FeedbackInstance} from '../model';
import {Observable} from 'rxjs';
import {ApiConstants} from '../../../util';

@Injectable({
  providedIn: 'root'
})
export class FeedbackExecutionService {

  constructor(
    private http: HttpClient,
  ) { }

  create(instance: FeedbackInstance): Observable<FeedbackInstance> {
    return this.http.post<FeedbackInstance>(ApiConstants.FEEDBACK_EXECUTION + ApiConstants.CREATE, instance);
  }
}

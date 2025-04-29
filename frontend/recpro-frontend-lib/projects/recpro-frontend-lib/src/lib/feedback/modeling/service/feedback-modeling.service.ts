import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Feedback} from '../model/Feedback';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../../../util';

@Injectable({
  providedIn: 'root'
})
export class FeedbackModelingService {

  private feedback: BehaviorSubject<Feedback[]> = new BehaviorSubject<Feedback[]>([]);
  private activeFeedback: BehaviorSubject<Feedback> = new BehaviorSubject<Feedback>(new Feedback());
  private currentFeedback: BehaviorSubject<Feedback> = new BehaviorSubject<Feedback>(new Feedback());

  constructor(
    private http: HttpClient,
  ) { }

  private setActiveFeedback(feedback: Feedback) {
    this.activeFeedback.next(feedback);
  }

  private getActiveFeedback(): Observable<Feedback> {
    return this.activeFeedback;
  }
  private setCurrentFeedback(feedback: Feedback) {
    this.currentFeedback.next(feedback);
  }

  private getCurrentFeedback(): Observable<Feedback> {
    return this.currentFeedback;
  }

  private setFeedback(feedback: Feedback[]) {
    this.feedback.next(feedback);
  }

  private getFeedback(): Observable<Feedback[]> {
    return this.feedback;
  }

  getAll(): Observable<Feedback[]> {
    this.http.get<Feedback[]>(ApiConstants.FEEDBACK_MODELING + ApiConstants.GET_ALL).subscribe(res => {
      this.setFeedback(res);
    });
    return this.getFeedback();
  }

  getById(id: string): Observable<Feedback> {
    this.http.get<Feedback>(ApiConstants.FEEDBACK_MODELING + id).subscribe(res => {
      this.setCurrentFeedback(res);
    });
    return this.getCurrentFeedback();
  }

  create(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(ApiConstants.FEEDBACK_MODELING + ApiConstants.CREATE, feedback).pipe(tap(res => {
      this.setCurrentFeedback(res);
      this.getAll();
    }));
  }

  getActive(): Observable<Feedback> {
    this.http.get<Feedback>(ApiConstants.FEEDBACK_MODELING + ApiConstants.GET_ACTIVE).subscribe(res => {
      this.setActiveFeedback(res);
    });
    return this.getActiveFeedback();
  }

  setActive(id: string): Observable<Feedback> {
    this.http.get<Feedback>(ApiConstants.FEEDBACK_MODELING + ApiConstants.SET_ACTIVE + id).subscribe(res => {
      return this.setActiveFeedback(res);
    });
    return this.getActiveFeedback();
  }

  delete(id: string) {
    this.http.delete(ApiConstants.FEEDBACK_MODELING + ApiConstants.DELETE + id).subscribe(res => {
      console.log(res);
      this.getAll();
    });
  }
}

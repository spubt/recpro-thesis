import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConstants, RecommendationServiceModel, RecproTasklist} from '@recprocess/recpro-frontend-lib';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceExecutionService {

  constructor(
    private http: HttpClient
  ) { }

  initialize(recommendationService: RecommendationServiceModel): Observable<RecproTasklist> {
    return this.http.post<RecproTasklist>(ApiConstants.RECOMMENDATION_EXECUTION + ApiConstants.INITIALIZE, recommendationService);
  }

  applyRecommendation(tasklist: RecproTasklist): Observable<RecproTasklist> {
    return this.http.post<RecproTasklist>(ApiConstants.RECOMMENDATION_EXECUTION + "applyRecommendation", tasklist);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecommendationServiceModel} from '../model';
import {Observable, take} from 'rxjs';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceModelingService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<RecommendationServiceModel[]> {
    return this.http.get<RecommendationServiceModel[]>(ApiConstants.RECOMMENDATION_MODELING + ApiConstants.GET_ALL).pipe(take(1));
  }

  getById(id: string): Observable<RecommendationServiceModel> {
    return this.http.get<RecommendationServiceModel>(ApiConstants.RECOMMENDATION_MODELING + ApiConstants.GET + id).pipe(take(1));
  }

  create(dimension: RecommendationServiceModel): Observable<RecommendationServiceModel> {
    return this.http.post<RecommendationServiceModel>(ApiConstants.RECOMMENDATION_MODELING + ApiConstants.CREATE, dimension).pipe(take(1));
  }

  delete(id: string): Observable<any> {
    return this.http.delete(ApiConstants.RECOMMENDATION_MODELING + ApiConstants.DELETE + id).pipe(take(1));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {RecommendationDimension} from '../model';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class RecommendationDimensionModelingService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<RecommendationDimension[]> {
    return this.http.get<RecommendationDimension[]>(ApiConstants.RECOMMENDATION_DIMENSION_MODELING + ApiConstants.GET_ALL).pipe(take(1));
  }

  getById(id: string): Observable<RecommendationDimension> {
    return this.http.get<RecommendationDimension>(ApiConstants.RECOMMENDATION_DIMENSION_MODELING + ApiConstants.GET + id).pipe(take(1));
  }

  create(dimension: RecommendationDimension): Observable<RecommendationDimension> {
    return this.http.post<RecommendationDimension>(ApiConstants.RECOMMENDATION_DIMENSION_MODELING + ApiConstants.CREATE, dimension).pipe(take(1));
  }

  delete(id: string): Observable<any> {
    return this.http.delete(ApiConstants.RECOMMENDATION_DIMENSION_MODELING + ApiConstants.DELETE + id).pipe(take(1));
  }
}

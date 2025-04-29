import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractActivityParameter} from '../model';
import {Observable} from 'rxjs';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class ActivityParameterModelingService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<AbstractActivityParameter[]> {
    return this.http.get<AbstractActivityParameter[]>(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_MODELING + ApiConstants.GET_ALL);
  }

  get(id: string): Observable<AbstractActivityParameter> {
    return this.http.get<AbstractActivityParameter>(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_MODELING + ApiConstants.GET + id);
  }

  create(activityParameter: AbstractActivityParameter): Observable<AbstractActivityParameter> {
    return this.http.post<AbstractActivityParameter>(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_MODELING + ApiConstants.CREATE, activityParameter);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(ApiConstants.ERC_DATA_ACTIVITY_PARAMETER_MODELING + ApiConstants.DELETE_ID + id);
  }
}

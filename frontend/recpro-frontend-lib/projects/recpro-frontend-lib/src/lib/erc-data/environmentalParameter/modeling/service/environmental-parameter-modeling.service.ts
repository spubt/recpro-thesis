import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {AbstractEnvironmentalParameter} from '../model';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentalParameterModelingService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<AbstractEnvironmentalParameter[]> {
    return this.http.get<AbstractEnvironmentalParameter[]>(ApiConstants.ERC_DATA_ENVIRONMENT_PARAMETER_MODELING + ApiConstants.GET_ALL).pipe(take(1));
  }

  get(id: string): Observable<AbstractEnvironmentalParameter> {
    return this.http.get<AbstractEnvironmentalParameter>(ApiConstants.ERC_DATA_ENVIRONMENT_PARAMETER_MODELING + ApiConstants.GET + id).pipe(take(1));
  }

  create(parameter: AbstractEnvironmentalParameter): Observable<AbstractEnvironmentalParameter> {
    return this.http.post<AbstractEnvironmentalParameter>(ApiConstants.ERC_DATA_ENVIRONMENT_PARAMETER_MODELING + ApiConstants.CREATE, parameter).pipe(take(1));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(ApiConstants.ERC_DATA_ENVIRONMENT_PARAMETER_MODELING + ApiConstants.DELETE_ID + id).pipe(take(1));
  }
}

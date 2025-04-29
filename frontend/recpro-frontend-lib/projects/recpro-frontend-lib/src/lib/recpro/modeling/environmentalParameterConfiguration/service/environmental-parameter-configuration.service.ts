import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnvironmentalParameterConfiguration} from '../model';
import {Observable, take} from 'rxjs';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentalParameterConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  create(configuration: EnvironmentalParameterConfiguration): Observable<EnvironmentalParameterConfiguration> {
    return this.http.post<EnvironmentalParameterConfiguration>(ApiConstants.RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION + ApiConstants.CREATE, configuration).pipe(take(1));
  }

  createAll(configurations: EnvironmentalParameterConfiguration[], activityId: string): Observable<EnvironmentalParameterConfiguration[]> {
    return this.http.post<EnvironmentalParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION + ApiConstants.CREATE_ALL + "?" + ApiConstants.ACTIVITY_ID + "=" + activityId, configurations).pipe(take(1));
  }

  getAll(): Observable<EnvironmentalParameterConfiguration[]> {
    return this.http.get<EnvironmentalParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION + ApiConstants.GET_ALL).pipe(take(1));
  }

  getByActivityId(activityId: string): Observable<EnvironmentalParameterConfiguration[]> {
    return this.http.get<EnvironmentalParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION + ApiConstants.GET_BY_ACTIVITY_ID + activityId).pipe(take(1));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(ApiConstants.RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION + ApiConstants.DELETE_ID + id).pipe(take(1));
  }
}

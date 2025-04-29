import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivityParameterConfiguration} from '../model';
import {Observable, take} from 'rxjs';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class ActivityParameterConfigurationService {

  constructor(
    private http: HttpClient,
  ) { }

  create(activityParameterConfiguration: ActivityParameterConfiguration): Observable<ActivityParameterConfiguration> {
    return this.http.post<ActivityParameterConfiguration>(ApiConstants.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + ApiConstants.CREATE, activityParameterConfiguration).pipe(take(1));
  }

  createAll(activityParameterConfigurations: ActivityParameterConfiguration[], activityId: string): Observable<ActivityParameterConfiguration[]> {
    return this.http.post<ActivityParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + ApiConstants.CREATE_ALL + "?" + ApiConstants.ACTIVITY_ID + "=" + activityId, activityParameterConfigurations).pipe(take(1));
  }

  getAll(): Observable<ActivityParameterConfiguration[]> {
    return this.http.get<ActivityParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + ApiConstants.GET_ALL).pipe(take(1));
  }

  getByActivityId(activityId: string): Observable<ActivityParameterConfiguration[]> {
    return this.http.get<ActivityParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + ApiConstants.GET_BY_ACTIVITY_ID + activityId).pipe(take(1));
  }

  getByActivityParameterId(activityParameterId: string): Observable<ActivityParameterConfiguration[]> {
    return this.http.get<ActivityParameterConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + ApiConstants.GET_BY_ACTIVITY_PARAMETER_ID + activityParameterId).pipe(take(1));
  }

  delete(activityParameterConfigurationId: string): Observable<void> {
    return this.http.delete<void>(ApiConstants.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + ApiConstants.DELETE_ID + activityParameterConfigurationId).pipe(take(1));
  }
}

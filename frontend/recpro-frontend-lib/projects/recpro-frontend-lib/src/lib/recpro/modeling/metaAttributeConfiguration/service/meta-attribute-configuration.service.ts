import { Injectable } from '@angular/core';
import {MetaAttributeConfiguration} from '../model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class MetaAttributeConfigurationService {

  private MetaAttributeConfigurations: BehaviorSubject<MetaAttributeConfiguration[]> = new BehaviorSubject<MetaAttributeConfiguration[]>([]);
  private currentMetaAttributeConfigurations: BehaviorSubject<MetaAttributeConfiguration[]> = new BehaviorSubject<MetaAttributeConfiguration[]>([]);
  private currentMetaAttributeConfiguration: BehaviorSubject<MetaAttributeConfiguration> = new BehaviorSubject<MetaAttributeConfiguration>(new MetaAttributeConfiguration());

  constructor(
    private http: HttpClient,
  ) { }

  private _getMetaAttributeConfigurations(): Observable<MetaAttributeConfiguration[]> {
    return this.MetaAttributeConfigurations;
  }

  private _setMetaAttributeConfigurations(metaAttributes: MetaAttributeConfiguration[]) {
    this.MetaAttributeConfigurations.next(metaAttributes);
  }

  private _getCurrentMetaAttributeConfigurations(): Observable<MetaAttributeConfiguration[]> {
    return this.currentMetaAttributeConfigurations;
  }

  private _setCurrentMetaAttributeConfigurations(metaAttributes: MetaAttributeConfiguration[]) {
    this.currentMetaAttributeConfigurations.next(metaAttributes);
  }

  private _setCurrentMetaAttributeConfiguration(metaAttribute: MetaAttributeConfiguration) {
    this.currentMetaAttributeConfiguration.next(metaAttribute);
  }

  private _getCurrentMetaAttributeConfiguration(): Observable<MetaAttributeConfiguration> {
    return this.currentMetaAttributeConfiguration;
  }

  public getAll(): Observable<MetaAttributeConfiguration[]> {
    this.http.get<MetaAttributeConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION).subscribe(res => {
      this._setMetaAttributeConfigurations(res);
    });
    return this._getMetaAttributeConfigurations();
  }

  public getByActivityId(activityId: string): Observable<MetaAttributeConfiguration[]> {
    this.http.get<MetaAttributeConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION + ApiConstants.GET_BY_ACTIVITY_ID + activityId).subscribe(res => {
      this._setCurrentMetaAttributeConfigurations(res);
    });
    return this._getCurrentMetaAttributeConfigurations();
  }

  public getByMetaAttributeId(metaAttributeId: string): Observable<MetaAttributeConfiguration[]> {
    this.http.get<MetaAttributeConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION + ApiConstants.GET_BY_META_ATTRIBUTE_ID + metaAttributeId).subscribe(res => {
      this._setCurrentMetaAttributeConfigurations(res);
    });
    return this._getCurrentMetaAttributeConfigurations();
  }

  public createAll(MetaAttributeConfigurations: MetaAttributeConfiguration[], activityId: string, metaAttributeId: string): Observable<MetaAttributeConfiguration[]> {
    this.http.post<MetaAttributeConfiguration[]>(ApiConstants.RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION + ApiConstants.CREATE_ALL + '?' + ApiConstants.ACTIVITY_ID + '=' + activityId + '&' + ApiConstants.META_ATTRIBUTE_ID + '=' + metaAttributeId, MetaAttributeConfigurations).subscribe(res => {
      this._setCurrentMetaAttributeConfigurations(res);
    });
    return this._getCurrentMetaAttributeConfigurations();
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MetaAttribute} from '../model';
import {HttpClient} from '@angular/common/http';
import {ApiConstants} from '../../../../util';

@Injectable({
  providedIn: 'root'
})
export class MetaAttributeModelingService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<MetaAttribute[]> {
    return this.http.get<MetaAttribute[]>(ApiConstants.ERC_DATA_META_ATTRIBUTE_MODELING + ApiConstants.GET_ALL);
  }

  create(attribute: MetaAttribute): Observable<MetaAttribute> {
    return this.http.post<MetaAttribute>(ApiConstants.ERC_DATA_META_ATTRIBUTE_MODELING + ApiConstants.CREATE, attribute);
  }

  createAll(attributes: MetaAttribute[]): Observable<MetaAttribute[]> {
    return this.http.post<MetaAttribute[]>(ApiConstants.ERC_DATA_META_ATTRIBUTE_MODELING + ApiConstants.CREATE, attributes);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model';
import {Observable, take} from 'rxjs';
import {ApiConstants} from '../../util';

@Injectable({
  providedIn: 'root'
})
export class UserModelingService {

  constructor(
    private http: HttpClient
  ) { }

  create(user: User, password: string): Observable<User> {
    return this.http.post<User>(ApiConstants.USER_MODELING + ApiConstants.CREATE + "?password=" + password, user).pipe(take(1));
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(ApiConstants.USER_MODELING + ApiConstants.GET_ALL).pipe(take(1));
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(ApiConstants.USER_MODELING + ApiConstants.GET + id).pipe(take(1));
  }

  update(user: User): Observable<User> {
    return this.http.post<User>(ApiConstants.USER_MODELING + ApiConstants.UPDATE, user).pipe(take(1));
  }
}

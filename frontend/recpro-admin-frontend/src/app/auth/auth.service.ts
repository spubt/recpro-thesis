import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {KeycloakService} from './keycloak/keycloak.service';
import {User} from '@recprocess/recpro-frontend-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  private user: User = new User();

  constructor(
    private keycloakService: KeycloakService,
  ) {

  }

  public getCurrentUserObservable(): Observable<User> {
    console.log('getCurrentUserObservable');
    this.keycloakService.getCurrentUser().subscribe(res => {
      this.user = res;
      this.currentUser.next(res);
    });
    return this.currentUser;
  }

  getCurrentUser(): User {
    return this.user;
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
  }
}

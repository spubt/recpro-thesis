import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '@recprocess/recpro-frontend-lib';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User());

  constructor(
    private keycloak: Keycloak
  ) { }

  login() {
    this.keycloak.login().then(result => {
      console.log(result);
    });
  }

  logout() {
    this.keycloak.logout().then(() => {
      this.currentUser.next(new User());
    });
  }

  getCurrentUser(): Observable<User> {
    this.keycloak.loadUserProfile().then(user => {
      let recproUser = new User();

      recproUser.id = user.id!;
      recproUser.firstName = user.firstName!;
      recproUser.lastName = user.lastName!;
      recproUser.email = user.email!;

      this.currentUser.next(recproUser);
    });
    return this.currentUser;
  }
}

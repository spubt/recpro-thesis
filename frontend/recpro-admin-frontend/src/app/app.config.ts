import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {ApiConstants} from '@recprocess/recpro-frontend-lib';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideKeycloak} from 'keycloak-angular';
import {authInterceptor} from './auth/auth.interceptor';
import {environment} from '../environments/environment';

ApiConstants.initialize('http://localhost:8080');

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        url: environment.keycloak.issuer,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),

  ]
};

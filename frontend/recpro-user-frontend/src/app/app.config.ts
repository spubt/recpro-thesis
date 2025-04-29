import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideKeycloak} from 'keycloak-angular';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './auth/auth.interceptor';
import {ApiConstants} from '@recprocess/recpro-frontend-lib';

ApiConstants.initialize('http://localhost:8080');

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        url: 'http://localhost:8081',
        realm: 'recpro',
        clientId: 'recpro-user-frontend'
      },
      initOptions: {
        onLoad: 'login-required'

        // onLoad: 'check-sso',
        //
        // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as auth0 from 'auth0-js';

import { SessionLocalService } from './../../session/services/session-local.service';

import { AUTH_CONFIG } from '../models/auth.config';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth(AUTH_CONFIG);

  constructor(
    private router: Router,
    private sessionLocalService: SessionLocalService
  ) {

  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(this.sessionLocalService.expiresAt);

    return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }

  logout(): void {
    this.sessionLocalService.clearSession();
  }

  handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (err)
        this.router.navigate(['/']);

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.sessionLocalService.setAuthSession(authResult);
        this.router.navigate(['/']);
      }
    });
  }
}

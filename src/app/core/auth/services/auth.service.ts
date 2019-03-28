import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as auth0 from 'auth0-js';

import { SessionService } from './../../session/services/session.service';

import { AUTH_CONFIG } from '../models/auth.config';

@Injectable()
export class AuthService {

  private auth0 = new auth0.WebAuth(AUTH_CONFIG);

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {

  }

  handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.sessionService.set(authResult);
        this.router.navigate(['app/business/scheduling/calendar']);
      }
    });
  }

  isAuthenticated(): boolean {
    let expiresAt = this.sessionService.getExpiresAt();

    if (!expiresAt)
      return false;

    return new Date().getTime() < Number(expiresAt);
  }

  login() {
    this.auth0.authorize();
  }

  logout(): void {
    this.sessionService.clear();

    this.auth0.logout(AUTH_CONFIG);
  }

  renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.sessionService.set(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }
}

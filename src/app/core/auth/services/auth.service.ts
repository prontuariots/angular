import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as auth0 from 'auth0-js';

import { AUTH_CONFIG } from '../models/auth.config';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  private sessionNames: any;
  private auth0 = new auth0.WebAuth(AUTH_CONFIG);

  constructor(
    private router: Router
  ) {
    this.sessionNames = environment.core.session;
  }

  handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
        this.router.navigate(['app/business/scheduling/calendar']);
      }
    });
  }

  isAuthenticated(): boolean {
    let expiresAt = localStorage.getItem(this.sessionNames.expiresAt);

    if (!expiresAt)
      return false;

    return new Date().getTime() < Number(expiresAt);
  }

  login() {
    this.auth0.authorize();
  }

  logout(): void {
    localStorage.removeItem(this.sessionNames.isLoggedIn);
    localStorage.removeItem(this.sessionNames.accessToken);
    localStorage.removeItem(this.sessionNames.idToken);
    localStorage.removeItem(this.sessionNames.expiresAt);

    this.auth0.logout(AUTH_CONFIG);
  }

  renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }





  private localLogin(authResult): void {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('idToken', authResult.idToken);

    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    localStorage.setItem('expiresAt', `${expiresAt}`);
  }
}

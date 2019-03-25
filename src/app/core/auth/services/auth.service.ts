import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as auth0 from 'auth0-js';

import { AUTH_CONFIG } from '../models/auth.config';

@Injectable()
export class AuthService {

  private auth0 = new auth0.WebAuth(AUTH_CONFIG);
  private _expiresAt: number;
  private _idToken: string;
  private _accessToken: string;

  constructor(
    private router: Router
  ) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
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
    const expiresAt = localStorage.getItem('expiresAt');

    if (!expiresAt)
      return false;

    return new Date().getTime() < Number(expiresAt);
  }

  login() {
    this.auth0.authorize();
  }

  logout(): void {
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiresAt');

    this.router.navigate(['/']);
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

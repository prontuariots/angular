import { Injectable } from '@angular/core';

import * as _ from "lodash";

import { UserProfile } from '../models/user-profile.model';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable()
export class SessionService {

  private sessionNames: any;
  jwtHelper: JwtHelperService = new JwtHelperService();

  expiresAt: number;
  isLoggedIn: boolean;

  idToken: string;
  accessToken: string;

  user: UserProfile;
  userGroup: string;

  constructor(
  ) {
    this.sessionNames = environment.core.session;
    this.initializeProperties();
  }

  clearSession(): void {
    localStorage.removeItem(this.sessionNames.expiresAt);
    localStorage.removeItem(this.sessionNames.isLoggedIn);

    localStorage.removeItem(this.sessionNames.idToken);
    localStorage.removeItem(this.sessionNames.accessToken);

    localStorage.removeItem(this.sessionNames.user);
    localStorage.removeItem(this.sessionNames.userGroup);
  }





  private initializeProperties() {
    let expiresAt, isLoggedIn;

    expiresAt = localStorage.getItem(this.sessionNames.expiresAt);
    if (expiresAt)
      this.expiresAt = Number(expiresAt);

    isLoggedIn = localStorage.getItem(this.sessionNames.isLoggedIn);
    this.isLoggedIn = isLoggedIn == 'true';

    this.idToken = localStorage.getItem(this.sessionNames.idToken);
    this.accessToken = localStorage.getItem(this.sessionNames.accessToken);

    this.userGroup = localStorage.getItem(this.sessionNames.userGroup);
    this.user = JSON.parse(localStorage.getItem(this.sessionNames.user));
  }
}

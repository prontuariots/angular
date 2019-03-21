import { Injectable } from '@angular/core';

import * as _ from "lodash";

import { UserProfile } from '../models/user-profile.model';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class SessionLocalService {

  jwtHelper: JwtHelperService  = new JwtHelperService ();

  // Auth Session
  private ID_TOKEN: string;
  private ACCESS_TOKEN: string;
  private EXPIRES_AT: string;
  private USER_PROFILE: string;
  private USER_GROUP: string;
  
  user: UserProfile;
  idToken: string;
  expiresAt: string;
  accessToken: string;
  userGroup: string;

  constructor(
  ) {
    this.initializeConstant();
    this.initializeProperties();
  }

  clearSession(): void {
    this.expiresAt = null;

    localStorage.removeItem(this.ID_TOKEN)
    localStorage.removeItem(this.EXPIRES_AT);
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.USER_PROFILE);
    localStorage.removeItem(this.USER_GROUP);
  }

  setAuthSession(authResult: any): void {
    this.setUser(authResult);
    this.setIdToken(authResult);
    this.setExpiresAt(authResult);
    this.setUserGroup(authResult);
    this.setAccessToken(authResult);
  }
  private setAccessToken(authResult: any): void {
    this.accessToken = authResult.accessToken
    localStorage.setItem(this.ACCESS_TOKEN, authResult.accessToken);
  }
  private setExpiresAt(authResult: any): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    this.expiresAt = expiresAt;
    localStorage.setItem(this.EXPIRES_AT, expiresAt);
  }
  private setIdToken(authResult: any): void {
    this.idToken = authResult.idToken;
    localStorage.setItem(this.ID_TOKEN, authResult.idToken);
  }
  private setUser(authResult: any): void {
    const user = authResult.idTokenPayload;

    this.user = user;
    localStorage.setItem(this.USER_PROFILE, JSON.stringify(user));
  }
  private setUserGroup(authResult: any): void {
    var group = this.jwtHelper.decodeToken(authResult.accessToken)['http://agile/autorization/groups'];

    this.userGroup = group[0];
    localStorage.setItem(this.USER_GROUP, this.userGroup);
  }




  private initializeConstant(): void {
    this.ID_TOKEN = 'id_token';
    this.ACCESS_TOKEN = 'access_token';
    this.EXPIRES_AT = 'expires_at';
    this.USER_PROFILE = 'userProfile';
    this.USER_GROUP = 'userGroup';
  }
  private initializeProperties() {
    let user;

    this.idToken = localStorage.getItem(this.ID_TOKEN);
    this.expiresAt = localStorage.getItem(this.EXPIRES_AT);
    this.userGroup = localStorage.getItem(this.USER_GROUP);
    this.accessToken = localStorage.getItem(this.ACCESS_TOKEN);

    user = JSON.parse(localStorage.getItem(this.USER_PROFILE));
    if (!!user)
      this.user = user;
  }
}

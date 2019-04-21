import { Injectable } from '@angular/core';

import * as _ from "lodash";

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable()
export class SessionService {

  private sessionNames: any;
  private jwtHelper: JwtHelperService;

  constructor(
  ) {
    this.jwtHelper = new JwtHelperService();
    this.sessionNames = environment.core.session;
  }

  clear(): void {
    localStorage.removeItem(this.sessionNames.expiresAt);
    localStorage.removeItem(this.sessionNames.isLoggedIn);

    localStorage.removeItem(this.sessionNames.idToken);
    localStorage.removeItem(this.sessionNames.accessToken);

    localStorage.removeItem(this.sessionNames.user);
    localStorage.removeItem(this.sessionNames.userGroup);
  }

  set(authResult: any): void {
    localStorage.setItem(this.sessionNames.isLoggedIn, 'true');
    localStorage.setItem(this.sessionNames.idToken, authResult.idToken);
    localStorage.setItem(this.sessionNames.accessToken, authResult.accessToken);
    localStorage.setItem(this.sessionNames.user, JSON.stringify(authResult.idTokenPayload));

    var group = this.jwtHelper.decodeToken(authResult.accessToken)['http://i-tech/autorization/groups'];
    localStorage.setItem(this.sessionNames.userGroup, group);

    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    localStorage.setItem('expiresAt', `${expiresAt}`);
  }


  getAccessToken(): string {
    return localStorage.getItem(this.sessionNames.accessToken);
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem(this.sessionNames.user));
  }

  getExpiresAt(): any {
    return localStorage.getItem(this.sessionNames.expiresAt);;
  }





  setCustomer(customer: any): void {
    let customers = [...this.getUnits(), customer];

    localStorage.setItem('customers', JSON.stringify(customers));
  }
  setDoctor(doctor: any): void {
    let doctors = [...this.getDoctors(), doctor];

    localStorage.setItem('doctors', JSON.stringify(doctors));
  }
  setScheduling(scheduling: any): void {
    let schedules = [...this.getSchedules(), scheduling];

    localStorage.setItem('schedules', JSON.stringify(schedules));
  }
  setUnit(unit: any): void {
    let units = [...this.getUnits(), unit];

    localStorage.setItem('units', JSON.stringify(units));
  }

  getCustomers(): any[] {
    let customers = JSON.parse(localStorage.getItem('customers'));

    customers = customers || [];

    return customers;
  }
  getDoctors(): any[] {
    let doctors = JSON.parse(localStorage.getItem('doctors'));

    doctors = doctors || [];

    return doctors;
  }
  getSchedules(): any[] {
    let schedules = JSON.parse(localStorage.getItem('schedules'));

    schedules = schedules || [];

    return schedules;
  }
  getUnits(): any[] {
    let units = JSON.parse(localStorage.getItem('units'));

    units = units || [];

    return units;
  }

  removeScheduling(scheduling: any): void {
    let schedules = this.getSchedules().filter(item => item.id != scheduling.id);

    localStorage.setItem('schedules', JSON.stringify(schedules));
  }
}

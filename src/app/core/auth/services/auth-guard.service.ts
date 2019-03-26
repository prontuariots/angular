import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { SessionService } from '../../session/services/session.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionService: SessionService
  ) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (route.outlet.includes('landing'))
      return true;

    if (!this.authService.isAuthenticated()) {
      this.sessionService.clearSession();
      this.router.navigate(['/']);
    }

    return this.authService.isAuthenticated();
  }
}

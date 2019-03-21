import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { SessionLocalService } from '../../session/services/session-local.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionLocalService: SessionLocalService,
  ) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (route.outlet.includes('landing'))
      return true;

    if (!this.authService.isAuthenticated())
      this.router.navigate(['/']);

    return this.authService.isAuthenticated();
  }
}

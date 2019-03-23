import { Component } from '@angular/core';

import { AuthService } from './../../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showSpinner: boolean;

  constructor(
    public authService: AuthService
  ) {

  }

  authLogin(): void {
    this.showSpinner = true;
    this.authService.login();
  }

  authLogout(): void {
    this.showSpinner = true;
    this.authService.logout();
  }
}

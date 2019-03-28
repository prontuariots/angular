import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showSpinner: boolean;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {

  }

  authLogin(): void {
    this.showSpinner = true;
    this.authService.login();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated())
      this.router.navigate(['app/business/scheduling/calendar']);
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/auth/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prontuario';

  constructor(
    private router: Router,
    public authService: AuthService
  ) {
    // if (this.authService.isAuthenticated())
    //   this.router.navigate(['app/business/scheduling/calendar']);
    // else
      this.authService.handleAuthentication();
  }

  ngOnInit() {
    // if (localStorage.getItem('isLoggedIn') === 'true') {
    //   this.authService.renewTokens();
    // }
  }
}

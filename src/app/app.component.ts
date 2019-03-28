import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prontuario';

  constructor(
    public authService: AuthService
  ) {
      this.authService.handleAuthentication();
  }

  ngOnInit() {
    // if (localStorage.getItem('isLoggedIn') === 'true') {
    //   this.authService.renewTokens();
    // }
  }
}

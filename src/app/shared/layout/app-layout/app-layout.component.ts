import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.sass']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}

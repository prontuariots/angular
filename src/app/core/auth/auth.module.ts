import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authguard.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuardService,
  ]
})
export class AuthModule { }

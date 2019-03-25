import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuardService,
  ]
})
export class AuthModule { }

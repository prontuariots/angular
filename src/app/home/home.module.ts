import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    AppRoutingModule,
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ]
})
export class HomeModule { }

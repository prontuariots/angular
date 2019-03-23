import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from './login/login.component';
import { InitialComponent } from '../business/scheduling/components/initial/initial.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    LoginComponent,
    InitialComponent
  ],
  declarations: [
    LoginComponent,
    InitialComponent
  ]
})
export class HomeModule { }

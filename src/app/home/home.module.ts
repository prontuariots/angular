import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    LoginComponent,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class HomeModule { }

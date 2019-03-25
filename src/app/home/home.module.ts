import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { LoginComponent } from './login/login.component';
import { InitialComponent } from '../business/scheduling/components/initial/initial.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
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

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';

import { DoctorModule } from './doctor/doctor.module';

import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [],
  imports: [
    DoctorModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    DoctorModule,
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }

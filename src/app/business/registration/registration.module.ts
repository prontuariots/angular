import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';

import { UnitModule } from './unit/unit.module';
import { DoctorModule } from './doctor/doctor.module';

import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [],
  imports: [
    UnitModule,
    DoctorModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    UnitModule,
    DoctorModule,
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }

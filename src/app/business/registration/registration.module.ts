import { NgModule } from '@angular/core';

import { DoctorModule } from './doctor/doctor.module';

@NgModule({
  declarations: [],
  imports: [
    DoctorModule,
  ],
  exports: [
    DoctorModule,
  ]
})
export class RegistrationModule { }

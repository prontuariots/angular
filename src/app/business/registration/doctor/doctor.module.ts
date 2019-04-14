import { NgModule } from '@angular/core';

import { FormModule } from './../../../shared/form/form.module';

import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorIndexComponent } from './components/doctor-index/doctor-index.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';

@NgModule({
  declarations: [
    DoctorFormComponent,
    DoctorIndexComponent,
    DoctorLayoutComponent,
  ],
  exports: [
    FormModule,
    DoctorFormComponent,
  ],
  imports: [
    FormModule
  ]
})
export class DoctorModule { }

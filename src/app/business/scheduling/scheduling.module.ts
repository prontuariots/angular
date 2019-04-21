import { NgModule } from '@angular/core';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from '../../app-routing.module';
import { RegistrationModule } from './../registration/registration.module';

import { SchedulingService } from './scheduling.service';

import { UnitFormComponent } from './../registration/unit/components/unit-form/unit-form.component';
import { DoctorFormComponent } from '../registration/doctor/components/doctor-form/doctor-form.component';
import { CustomerFormComponent } from './../registration/customer/components/customer-form/customer-form.component';

import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingHeaderComponent } from './components/scheduling-header/scheduling-header.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';
import { SchedulingDayViewComponent } from './components/scheduling-day-view/scheduling-day-view.component';
import { SchedulingEventFormComponent } from './components/scheduling-event-form/scheduling-event-form.component';

@NgModule({
  entryComponents: [
    UnitFormComponent,
    DoctorFormComponent,
    CustomerFormComponent,

    SchedulingComponent,
    SchedulingDayViewComponent,
    SchedulingEventFormComponent,
  ],
  declarations: [
    SchedulingComponent,
    SchedulingHeaderComponent,
    SchedulingLayoutComponent,
    SchedulingDayViewComponent,
    SchedulingEventFormComponent,
  ],
  imports: [
    RegistrationModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    SchedulingService
  ]
})
export class SchedulingModule { }

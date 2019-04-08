import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';

import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from './../../shared/material/material.module';

import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';

import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulingEventFormComponent } from './components/scheduling-event-form/scheduling-event-form.component';

@NgModule({
  entryComponents: [
    SchedulingComponent,
    SchedulingEventFormComponent
  ],
  declarations: [
    SchedulingComponent,
    SchedulingLayoutComponent,
    SchedulingEventFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class SchedulingModule { }

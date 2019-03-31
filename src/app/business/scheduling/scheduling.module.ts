import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';

import { AppRoutingModule } from '../../app-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [
    SchedulingComponent,
    SchedulingLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    MaterialModule,
    FlatpickrModule.forRoot(),
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class SchedulingModule { }

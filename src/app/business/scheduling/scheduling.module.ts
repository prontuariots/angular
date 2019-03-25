import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';

import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';

import { AppRoutingModule } from '../../app-routing.module';
@NgModule({
  declarations: [
    SchedulingComponent,
    SchedulingLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class SchedulingModule { }

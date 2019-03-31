import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';

import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
@NgModule({
  declarations: [
    SchedulingComponent,
    SchedulingLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class SchedulingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class LayoutModule { }

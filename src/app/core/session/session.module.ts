import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionLocalService } from './services/session-local.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SessionLocalService,
  ]
})
export class SessionModule { }

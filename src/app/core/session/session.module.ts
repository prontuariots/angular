import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionService } from './services/session.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SessionService,
  ]
})
export class SessionModule { }

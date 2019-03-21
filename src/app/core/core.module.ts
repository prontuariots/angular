import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';

const SharedModules = [
  AuthModule,
  SessionModule,
];

@NgModule({
  exports: SharedModules,
  imports: SharedModules,
})
export class CoreModule { }

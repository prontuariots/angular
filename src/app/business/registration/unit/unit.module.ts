import { NgModule } from '@angular/core';

import { FormModule } from './../../../shared/form/form.module';

import { UnitFormComponent } from './components/unit-form/unit-form.component';
import { UnitIndexComponent } from './components/unit-index/unit-index.component';
import { UnitLayoutComponent } from './components/unit-layout/unit-layout.component';

@NgModule({
  declarations: [
    UnitFormComponent,
    UnitIndexComponent,
    UnitLayoutComponent,
  ],
  exports: [
    FormModule,
    UnitFormComponent,
  ],
  imports: [
    FormModule
  ]
})
export class UnitModule { }

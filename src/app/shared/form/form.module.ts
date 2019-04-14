import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { MaterialModule } from './../../shared/material/material.module';

const formlyConfig = {
  types: [
   
  ],
  validationMessages: [

  ],
};

const importsModules = [
  CommonModule,
  MaterialModule,
  ReactiveFormsModule,
  FormlyMaterialModule,
  FormlyModule.forRoot(formlyConfig),
];

const exportsModules = [
  CommonModule,
  MaterialModule,
  ReactiveFormsModule,
  FormlyMaterialModule,
  FormlyModule,
];

@NgModule({
  imports: importsModules,
  exports: exportsModules,
  declarations: [],
})
export class FormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { MaterialModule } from './../../shared/material/material.module';

import { FormlyAutocompleteTypeComponent } from './components/formly-autocomplete-type/formly-autocomplete-type.component';

const formlyConfig = {
  types: [
    {
      name: 'autocomplete',
      wrappers: ['form-field'],
      component: FormlyAutocompleteTypeComponent,
    }
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
  declarations: [FormlyAutocompleteTypeComponent],
})
export class FormModule { }

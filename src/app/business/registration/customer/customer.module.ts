import { NgModule } from '@angular/core';

import { FormModule } from './../../../shared/form/form.module';

import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';
import { CustomerIndexComponent } from './components/customer-index/customer-index.component';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerIndexComponent,
    CustomerLayoutComponent,
  ],
  exports: [
    FormModule,
    CustomerFormComponent,
  ],
  imports: [
    FormModule
  ]
})
export class CustomerModule { }

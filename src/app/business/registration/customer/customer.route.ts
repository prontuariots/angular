import { Routes } from "@angular/router";

import { CustomerIndexComponent } from './components/customer-index/customer-index.component';
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';

const children = [
  {
    path: '',
    component: CustomerIndexComponent,
    data: {
      breadcrumbs: 'Index'
    }
  }
]

export const customerRoutes: Routes = [
  {
    path: 'customer',
    component: CustomerLayoutComponent,
    children,
    data: {
      breadcrumbs: 'Clientes'
    }
  }
]

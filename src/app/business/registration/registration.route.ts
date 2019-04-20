import { Routes } from "@angular/router";

import { unitRoutes } from './unit/unit.route';
import { doctorRoutes } from './doctor/doctor.route';
import { customerRoutes } from './customer/customer.route';

const children: Routes = [
  ...unitRoutes,
  ...doctorRoutes,
  ...customerRoutes,
]

export const registrationRoutes: Routes = [
  {
    path: 'registration',
    children,
    data: {
      breadcrumbs: 'Registros'
    }
  }
]

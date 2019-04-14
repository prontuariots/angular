import { Routes } from "@angular/router";

import { doctorRoutes } from './doctor/doctor.route';

const children: Routes = [
    ...doctorRoutes
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

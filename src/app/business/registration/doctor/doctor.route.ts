import { Routes } from "@angular/router";

import { DoctorIndexComponent } from './components/doctor-index/doctor-index.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';

const children = [
  {
    path: '',
    component: DoctorIndexComponent,
    data: {
      breadcrumbs: 'Index'
    }
  }
]

export const doctorRoutes: Routes = [
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children,
    data: {
      breadcrumbs: 'Medicos'
    }
  }
]

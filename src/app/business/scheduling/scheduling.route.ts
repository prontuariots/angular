import { Routes } from "@angular/router";

import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingLayoutComponent } from './components/scheduling-layout/scheduling-layout.component';

const children = [
  {
    path: '',
    component: SchedulingComponent,
    data: {
      breadcrumbs: 'Agenda'
    }
  },
  {
    path: 'calendar',
    component: SchedulingComponent,
    data: {
      breadcrumbs: 'Agenda'
    }
  }
]

export const schedulingRoutes: Routes = [
  {
    path: 'scheduling',
    component: SchedulingLayoutComponent,
    children,
    data: {
      breadcrumbs: 'Agendamentos'
    }
  }
]

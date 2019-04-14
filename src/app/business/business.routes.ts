import { Routes } from '@angular/router';

import { schedulingRoutes } from './scheduling/scheduling.route';
import { registrationRoutes } from './registration/registration.route';

export const businessRoutes: Routes = [
  ...schedulingRoutes,
  ...registrationRoutes,
]

import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InitialComponent } from '../business/scheduling/components/initial/initial.component';
import { AuthGuardService } from '../core/auth/services/authguard.service';

export const homeRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      breadcrumbs: false
    }
  },
  {
    path: 'home',
    component: LoginComponent,
    data: {
      breadcrumbs: false
    }
  },
  {
    path: 'home/login',
    component: LoginComponent,
    data: {
      breadcrumbs: false
    }
  },
  {
    path: 'home/initial',
    component: InitialComponent,
    canActivate: [
      AuthGuardService
    ],
    data: {
      breadcrumbs: false
    }
  }
]

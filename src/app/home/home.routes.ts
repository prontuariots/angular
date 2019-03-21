import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

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
  }
]

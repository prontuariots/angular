import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './core/auth/services/auth-guard.service';

import { homeRoutes } from './home/home.routes';
import { businessRoutes } from './business/business.routes';

import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: 'app/business',
    children: businessRoutes,
    component: AppLayoutComponent,
    canActivate: [
      AuthGuardService
    ],
    data: {
      breadcrumbs: false
    }
  },
  {
    path: '',
    children: homeRoutes,
    data: {
      breadcrumbs: false
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

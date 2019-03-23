import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeRoutes } from './home/home.routes';

const routes: Routes = [
  {
    path: '',
    children: homeRoutes,
    // component: LandingComponent,
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

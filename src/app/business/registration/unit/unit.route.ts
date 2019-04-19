import { Routes } from "@angular/router";

import { UnitIndexComponent } from './components/unit-index/unit-index.component';
import { UnitLayoutComponent } from './components/unit-layout/unit-layout.component';

const children = [
  {
    path: '',
    component: UnitIndexComponent,
    data: {
      breadcrumbs: 'Index'
    }
  }
]

export const unitRoutes: Routes = [
  {
    path: 'unit',
    component: UnitLayoutComponent,
    children,
    data: {
      breadcrumbs: 'Unidades'
    }
  }
]

import { Routes } from '@angular/router';

import { DashboardComponent, PageNotFoundComponent } from '@show-movies/ui'

 export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

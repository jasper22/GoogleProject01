import { Routes } from '@angular/router';

import {
  DashboardComponent,
  PageNotFoundComponent,
  DownloadsComponent,
  AboutComponent,
  UserPreferencesComponent,
  LogOutComponent
} from '@show-movies/ui'

 export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'downloads',
    component: DownloadsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user-preferences',
    component: UserPreferencesComponent
  },
  {
    path: 'log-out',
    component: LogOutComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

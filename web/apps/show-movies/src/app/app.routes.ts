import { Routes } from '@angular/router';

import {
  DashboardComponent,
  PageNotFoundComponent,
  DownloadsComponent,
  AboutComponent,
  UserPreferencesComponent,
  LogOutComponent,
  LoginComponent,
  ConsentComponent,
  AuthErrorComponent
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
    path: 'logout',
    component: LogOutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'consent',
    component: ConsentComponent
  },
  {
    path: 'auth_error',
    component: AuthErrorComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

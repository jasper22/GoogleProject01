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
import { AuthGuard } from './auth.guard';

 export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'downloads',
    component: DownloadsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user-preferences',
    component: UserPreferencesComponent,
    canActivate: [AuthGuard]
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

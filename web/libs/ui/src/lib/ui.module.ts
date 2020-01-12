import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WINDOW_PROVIDERS } from './window-provider';

import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AboutComponent } from './about/about.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { LogOutComponent } from './log-out/log-out.component';
import { TopAlertComponent } from './top-alert/top-alert.component';
import { LoginComponent } from './login/login.component';
import { ConsentComponent } from './consent/consent.component';
import { AuthErrorComponent } from './auth-error/auth-error.component';

import {AlertType } from './top-alert/alert-types.enum'

@NgModule({
  imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ClarityModule,
            ClrIconModule,
            BrowserAnimationsModule
  ],
  declarations: [
                  PageNotFoundComponent,
                  DashboardComponent,
                  DownloadsComponent,
                  AboutComponent,
                  UserPreferencesComponent,
                  LogOutComponent,
                  TopAlertComponent,
                  LoginComponent,
                  ConsentComponent,
                  AuthErrorComponent
  ],
  exports: [
              ClarityModule,
              ClrIconModule,
              PageNotFoundComponent,
              DashboardComponent,
              DownloadsComponent,
              AboutComponent,
              UserPreferencesComponent,
              LogOutComponent,
              TopAlertComponent,
              LoginComponent,
              ConsentComponent,
              AuthErrorComponent
  ],
  providers: [
    WINDOW_PROVIDERS
  ]
})
export class UiModule {}

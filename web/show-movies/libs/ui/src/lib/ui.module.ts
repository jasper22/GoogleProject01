import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AboutComponent } from './about/about.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { LogOutComponent } from './log-out/log-out.component';
import { TopAlertComponent } from './top-alert/top-alert.component';

@NgModule({
  imports: [
            CommonModule,
            ClarityModule,
            ClrIconModule,
            BrowserAnimationsModule
  ],
  declarations: [PageNotFoundComponent, DashboardComponent, DownloadsComponent, AboutComponent, UserPreferencesComponent, LogOutComponent, TopAlertComponent],
  exports: [
              ClarityModule,
              ClrIconModule,
              PageNotFoundComponent,
              DashboardComponent,
              DownloadsComponent,
              AboutComponent,
              UserPreferencesComponent,
              LogOutComponent,
              TopAlertComponent
  ]
})
export class UiModule {}

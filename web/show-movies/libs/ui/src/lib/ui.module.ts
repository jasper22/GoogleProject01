import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  imports: [
            CommonModule,
            ClarityModule,
            ClrIconModule,
            BrowserAnimationsModule
  ],
  declarations: [PageNotFoundComponent, DashboardComponent],
  exports: [
              ClarityModule,
              ClrIconModule,
              PageNotFoundComponent,
              DashboardComponent
  ]
})
export class UiModule {}

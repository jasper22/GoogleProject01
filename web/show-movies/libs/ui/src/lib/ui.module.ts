import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
            CommonModule,
            ClarityModule,
            ClrIconModule,
            BrowserAnimationsModule
           ]
})
export class UiModule {}

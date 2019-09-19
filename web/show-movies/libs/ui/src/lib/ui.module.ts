import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [CommonModule,  ClarityModule, BrowserAnimationsModule]
})
export class UiModule {}

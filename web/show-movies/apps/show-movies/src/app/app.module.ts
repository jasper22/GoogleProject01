import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { UiModule } from '@show-movies/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, ClarityModule, ClrIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

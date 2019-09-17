import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// declare var require: any;

if (environment.production) {

  // require('@google-cloud/trace-agent').start(
  // require('@google-cloud/debug-agent').start();
  // require('@google-cloud/profiler').start();

  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

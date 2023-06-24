import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));


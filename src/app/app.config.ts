import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient, withInterceptors } from '@angular/common/http';
import {  demoInterceptor } from './services/interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([demoInterceptor])),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};

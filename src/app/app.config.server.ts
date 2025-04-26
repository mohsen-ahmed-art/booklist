import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { globalInterceptor } from './core/Interseptor/global.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
 
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

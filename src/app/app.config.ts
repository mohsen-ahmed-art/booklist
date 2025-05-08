import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';

import { globalInterceptor } from './core/Interseptor/global.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReduser } from './Features/dashboard/components/cart/store/counter.reduser';
import { provideNgxStripe } from 'ngx-stripe';
const stripePublicKey ='pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8';
  
export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideHttpClient(withInterceptors([globalInterceptor])),
    provideAnimations(), // required animations providers
    provideToastr(),
    provideStore({count:counterReduser}),
    provideNgxStripe(stripePublicKey)
],
};





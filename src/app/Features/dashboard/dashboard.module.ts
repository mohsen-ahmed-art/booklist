import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { shareReplay } from 'rxjs';

import { NgxStripeModule } from 'ngx-stripe';
const stripePublicKey ='pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxStripeModule.forRoot(stripePublicKey),
    
  ]
})
export class DashboardModule { }

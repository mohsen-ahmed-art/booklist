import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule,  } from 'ngx-toastr';



import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
   

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }), 
  ]
 
  
})
export class AuthModule { }

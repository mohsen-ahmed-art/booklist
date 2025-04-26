 import { Component,ViewEncapsulation  } from '@angular/core';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
 import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


 import { signal } from '@angular/core';
import {
   FormControl,
   Validators,
   FormsModule,
 ReactiveFormsModule,
   FormGroup,
 } from '@angular/forms';
 import { CommonModule } from '@angular/common';
 import { UrlService } from '../../servisec/url.service';

  import { ToastrService } from 'ngx-toastr';
  import { Router } from '@angular/router';

   @Component({
   selector: 'app-change-password',
  imports: [    CommonModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule,
     MatButtonModule,
     FormsModule,
     MatFormFieldModule,
     MatInputModule,
     ReactiveFormsModule,],
   templateUrl: './change-password.component.html',
   styleUrl: './change-password.component.scss'
 })
 export class ChangePasswordComponent {
 

   hideOldPassword = signal(true);  
  hideNewPassword = signal(true);  

  
   clickEvent(event: MouseEvent, field: 'old' | 'new') {
     if (field === 'old') {
       this.hideOldPassword.set(!this.hideOldPassword());
     } else if (field === 'new') {
      this.hideNewPassword.set(!this.hideNewPassword());     }
     event.stopPropagation();
   }

   newPassword: string = '';
  confirmPassword: string = '';
   errorMessage: string = '';

  loginForm = new FormGroup({  
   password: new FormControl('', Validators.required),
     password_new: new FormControl('', Validators.required),
 
   });

   constructor(private _UrlService:UrlService ,private _ToastrService:ToastrService, private _router: Router) {}

 
  sendData(data: FormGroup) {
     console.log(data.value);
  
     this._UrlService.change(data.value).subscribe({
       next: (res) => {
   
                  localStorage.setItem('token', res.accessToken);
       },
       error: (err) => {
         console.error(err);
         this._ToastrService.error('error','error')
       }  ,complete:()=>{
        this._ToastrService.success('Login successfully','Success')
        this._router.navigate(['/auth/login'])
      }
     });
   }
 }

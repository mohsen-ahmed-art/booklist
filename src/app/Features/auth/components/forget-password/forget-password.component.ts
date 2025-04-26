

import { Component, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Router } from '@angular/router';
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
@Component({
  selector: 'app-forget-password',
  imports: [   CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  constructor(private _UrlService:UrlService,private _ToastrService:ToastrService ,private _Router:Router ){}
  loginForm = new FormGroup({
    
    email: new FormControl('', [Validators.required, Validators.email]),
   
 
  });
  get emailFormControl() {
    return this.loginForm.get('email');
  }


sendData(data: FormGroup) {
  console.log(data.value);

  this._UrlService.forget(data.value).subscribe({
    next: (res) => {
      console.log(res);
         
    },
    error: (err) => {
      console.error(err); 
    
      const errorMsg = err?.error?.message ||'حدث خطأ أثناء محاولة إرسال البريد';
    
      this._ToastrService.error(errorMsg, 'Error');
    },
    complete: () => {
      this._ToastrService.success('Email entered successfully', 'Success');
      
     
        this._Router.navigate(['/auth/rest-password'])
       
    }
  });
}

}

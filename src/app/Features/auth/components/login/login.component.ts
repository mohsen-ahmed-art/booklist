
import { Component, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-login',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = new FormGroup({
    
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
 
  });

  constructor(private _UrlService:UrlService ,private _ToastrService:ToastrService ,private _Router:Router) {}

  
  get emailFormControl() {
    return this.loginForm.get('email');
  }
  sendData(data: FormGroup) {
    console.log(data.value);

     this._UrlService.login (data.value).subscribe({
      next:(res)=>{
        console.log(res)
        localStorage.setItem('token', res.data.accessToken);
    
      },error:(err)=>{
        console.log(err.error.message );
        this._ToastrService.error('error','error')
        this._Router.navigate(['/auth/register'])
      }
,complete:()=>{
  this._ToastrService.success('Login successfully','Success')
  this._Router.navigate(['/dashboard/home'])
}     });
  }
  goToRegister() {
    this._Router.navigate(['/auth/register']);
  }

  // goToHome() {
  //   this._Router.navigate(['/dashboard/home'])
  //  }
}

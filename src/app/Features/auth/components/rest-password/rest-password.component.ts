import { Component, signal ,ViewEncapsulation} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UrlService } from '../../servisec/url.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rest-password',
  imports: [MatInputModule,MatFormFieldModule,FormsModule, CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  
   ],
  templateUrl: './rest-password.component.html',
  styleUrl: './rest-password.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class RestPasswordComponent {

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = new FormGroup({
    
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    otp:new FormControl('', [Validators.required, ]) 
  });
  get emailFormControl() {
    return this.loginForm.get('email');
  }
constructor(private _UrlService:UrlService,private _ToastrService:ToastrService ,private _Router:Router){}


sentdata(data: FormGroup) {
  this._UrlService.rest(data.value).subscribe({
    next: (res) => {
     
      console.log('Response:', res);
     
    },
    error: (err) => {
      console.error('Error:', err); 
    }
    ,complete:()=>{
      this._ToastrService.success('Login successfully','Success')
      this._Router.navigate(['/auth/login'])
    }
  });
}
// goToRegister() {
//   this._Router.navigate(['/auth/login'])
//  }
}



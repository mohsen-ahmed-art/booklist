import { Component , ViewEncapsulation,ChangeDetectionStrategy} from '@angular/core';
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
import { MatSelectModule } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [  CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,MatSelectModule ],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation:ViewEncapsulation.None,
})

export class RegisterComponent {
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  get emailFormControl() {
    return this.loginForm.get('email');
  }
  loginForm = new FormGroup({
    first_name:new FormControl('',[Validators.required ,] ),
    last_name:new FormControl('',[Validators.required ,] ),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    role:new FormControl ('',[Validators.required ,] )
  });

  constructor(private _UrlService:UrlService,private _ToastrService:ToastrService, private _Router:Router){}
 sendData(data:FormGroup){
     console.log(data)

   this._UrlService.register(data.value).subscribe({
       next:(res)=>{
         console.log(res)
   },error:()=>{},
   complete:()=>{
    this._ToastrService.success('You have registered successfully','Success')
    this._Router.navigate(['/auth/forget-password'])
   }

  
  })

}

// goToRegister() {
//  this._Router.navigate(['/auth/forget-password'])
// }
 }


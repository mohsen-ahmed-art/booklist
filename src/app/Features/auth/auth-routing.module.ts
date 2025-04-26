import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"rest-password",component:RestPasswordComponent},
  {path:"forget-password",component:ForgetPasswordComponent},
  {path:"change-password",component:ChangePasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

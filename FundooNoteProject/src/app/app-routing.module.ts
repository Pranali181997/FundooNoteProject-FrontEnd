import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: `register`,component:RegisterComponent},
  {path:`log-in`,component:LogInComponent},
  {path:`forgetpassword`,component:ForgetPasswordComponent},
  {path:`changepassword`,component:ChangePasswordComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

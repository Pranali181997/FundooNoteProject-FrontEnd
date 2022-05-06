import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
 import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
//import { ChangePasswordComponent } from './component/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent
  
    // ResetPasswordComponent, ChangePasswordComponent, ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

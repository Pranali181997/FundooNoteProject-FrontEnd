import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      // this.registerForm = this.formBuilder.group({
      // Email: ['', [Validators.required, Validators.email]],
      // Password: ['', [Validators.required, Validators.minLength(6)]] 
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }
  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.LoginForm.valid) {
      console.log("valid data", this.LoginForm.value);
      let data = {

        Email: this.LoginForm.value.Email,

        Password: this.LoginForm.value.Password,
      }
      //console.log("helllooo")
      this.user.login(data).subscribe((res: any) => {
        console.log(res.message);
        localStorage.setItem(`token`, res.message)
        this.snackBar.open('login successfull', '', {
          duration: 2000,
        });
      }, error => {
        this.snackBar.open('please enter valid data', '', {
          duration: 2000,
        })
      });
    }
    else {
      console.log("Invalid data", this.LoginForm.value);
    }
  }
}
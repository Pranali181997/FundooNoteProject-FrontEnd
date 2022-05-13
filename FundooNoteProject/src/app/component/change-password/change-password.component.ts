import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute:ActivatedRoute) { }
token:any
  ngOnInit(): void {
    this.ChangePasswordForm = this.formBuilder.group({
    
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.ChangePasswordForm.valid) {
      console.log("valid data", this.ChangePasswordForm.value);
      let data = {

        password: this.ChangePasswordForm.value.password,
        confirmpassword: this.ChangePasswordForm.value.confirmpassword
      }
      this.user.ChangePassword  (data).subscribe((res: any) => {
        console.log(res);
      })
    }
    else {
      console.log("Invalid data", this.ChangePasswordForm.value);
    }
  }
}
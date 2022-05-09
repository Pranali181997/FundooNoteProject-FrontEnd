import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ChangePasswordForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  });
  }
  onSubmit() {

console.log("inside submit")
if(this.ChangePasswordForm.valid){
  console.log("valid data",this.ChangePasswordForm.value);
}else{
  console.log("Invalid data",this.ChangePasswordForm.value);
}
  }
}

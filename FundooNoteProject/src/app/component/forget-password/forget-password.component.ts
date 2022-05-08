import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  });
  }
  onSubmit() {

console.log("inside submit")
if(this.ForgetPasswordForm.valid){
  console.log("valid data",this.ForgetPasswordForm.value);
}else{
  console.log("Invalid data",this.ForgetPasswordForm.value);
}
  }
}


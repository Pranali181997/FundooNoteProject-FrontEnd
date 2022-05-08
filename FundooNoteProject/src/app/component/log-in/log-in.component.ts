import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  LoginForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
     // this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    
  });
    
  }

  onSubmit() {

    console.log("inside submit")
    if(this.LoginForm.valid){
      console.log("valid data",this.LoginForm.value);
    }else{
      console.log("Invalid data",this.LoginForm.value);
    }
      }
}

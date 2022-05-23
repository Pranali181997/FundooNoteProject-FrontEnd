import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}  
canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
} 
  gettoken(){
    return !!localStorage.getItem("token");
  }
}


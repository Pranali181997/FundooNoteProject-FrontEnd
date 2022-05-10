
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';
//import { HttpServiceService } from '../ttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;

  constructor(private httpService:HttpService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
return this.httpService.postService(this.base+`User/Register`,data,false,
  header);
}
login(data:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json-patch+json'
    })
  }
return this.httpService.postService(this.base+`User/Login/${data.Email}/${data.Password}`, {} ,false,header)

}
ForgetPassword(data:any){
  let header={
    headers:new HttpHeaders({
      'content-type': 'application/json'
    })
  }
return this.httpService.postService(this.base+`User/ForgetPassword/${data.email}`, {} ,false,header)

}
}


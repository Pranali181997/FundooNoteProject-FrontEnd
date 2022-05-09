import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

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
}


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  // postService(url:string,payload:any,token:false,httpOptions:any){
  //  return this.http.post(url,payload,token && httpOptions)

  // }
  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={} ){
    // console.log("inside http service" ,reqdata,token,httpOptions)
   return this.http.post(url,reqdata,token && httpOptions)
  }
  putService(){

  }
  getService(){
    
  }
  deleteService(){
    
  }
}

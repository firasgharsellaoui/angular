import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { map, filter, scan } from 'rxjs/operators';

  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)  
            .pipe(map((response: Response) =>response.json()))              
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
            .pipe(map((response: Response) => response.json()))              
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
  }  
  
}  
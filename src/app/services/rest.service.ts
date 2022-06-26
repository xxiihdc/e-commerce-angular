import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCustom } from '../interfaces/response';
import { constants } from './const';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }
  token = localStorage.getItem("token");
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + this.token
  });
  options = { headers: this.headers };
  get(url:string):Observable<ResponseCustom>{
      return this.http.get<ResponseCustom>(url,this.options);
  }

  post(url:string, data:string):Observable<ResponseCustom>{
    return this.http.post<ResponseCustom>(url,data,this.options);
  }
  put(url:string, data:string):Observable<ResponseCustom>{
    return this.http.put<ResponseCustom>(url,data,this.options);
  }
  delete(url:string):Observable<ResponseCustom>{
    return this.http.delete<ResponseCustom>(url,this.options);
  }
  addCartItem(data:any):Observable<ResponseCustom>{
    return this.http.post<ResponseCustom>(constants.ADD_CART_ITEM,data,this.options);
  }
}

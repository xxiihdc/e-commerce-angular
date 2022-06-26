import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ResponseCustom } from '../interfaces/response';
import { constants } from './const';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }

token = localStorage.getItem("token");
headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer "+this.token });
options = { headers: this.headers };
login(form: NgForm):Observable<ResponseCustom>{
  return this.http.post<ResponseCustom>(constants.LOGIN,form.value,this.options);
}
}

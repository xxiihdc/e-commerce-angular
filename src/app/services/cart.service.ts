import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCustom } from '../interfaces/response';
import { constants } from './const';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(private http: HttpClient) { }
  getCartItemByUser(userId:number):Observable<ResponseCustom>{
    return this.http.get<ResponseCustom>(constants.GET_CART_ITEM_BY_USER);
  }
}

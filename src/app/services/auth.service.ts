import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceCustom {
  public roles = [];
  helper = new JwtHelperService();
  public setToken(token: string) {
    if (!token) {
      this.removeToken();
      return;
    }
    localStorage.setItem('token', token);
  }
  removeToken() {
    localStorage.setItem('token', '');
  }
  isLogin(): boolean {
    const token = localStorage.getItem('token');
    if (!token){
      return false;
    }
    const decodedToken = this.helper.decodeToken(token);
    if(!decodedToken.Username) return false;
    return true;
  }
  isAdmin():boolean{
    const token = localStorage.getItem('token');
    if (!token){
      return false;
    }
    const decodedToken = this.helper.decodeToken(token);
    if(decodedToken.ROLES_FOR_FE[0]== 'ROLE_ADMIN'){
      console.log("admin check here")
      return true;
    }
    return false;
  }
  getUserId():number{
    const token = localStorage.getItem('token');
    if(!token) return 0;
    const decodedToken = this.helper.decodeToken(token);
    return decodedToken.Username as number;
  }
  getUsername():string{
    const token = localStorage.getItem('token');
    if(!token) return "";
    const decodedToken = this.helper.decodeToken(token);
    return decodedToken.VIEW_NAME as string;
  }
  getCartId():string{
    const token = localStorage.getItem('token');
    if(!token) return "";
    const decodedToken = this.helper.decodeToken(token);
    return decodedToken.CART_ID as string;
  }
  getToken():string{
    return localStorage.getItem('token') as string;
  }

  constructor() { }

}

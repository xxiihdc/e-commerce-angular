import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceCustom } from "../services/auth.service";
@Injectable({
    providedIn: 'root'
})
export class AuthGuardCustom implements CanActivate{
    constructor(private auth:AuthServiceCustom){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            return this.auth.isAdmin();

}}

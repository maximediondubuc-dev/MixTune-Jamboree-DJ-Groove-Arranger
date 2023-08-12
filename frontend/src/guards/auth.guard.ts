import { Inject, Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/services/auth.service";

 @Injectable()
 export class AuthGuard implements CanActivate {
    authService = Inject(AuthService)
    private readonly URL_PRE_CALLBACK = 'url_pre_callback'
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let returnStatus = false;
        this.setPreCallbackUrl(state.url)
        if(!this.authService.isLoggedIn()){
            this.authService.login();
            return returnStatus;
        }
        returnStatus = true;
        return returnStatus;
    }

    setPreCallbackUrl(url:string): void {
        sessionStorage.setItem(this.URL_PRE_CALLBACK,url);
    }
 }
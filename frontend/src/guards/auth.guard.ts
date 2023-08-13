import { Inject, Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/services/auth/auth.service";
import { SpotifyAuthService } from "src/services/auth/spotifyAuth.service";

 @Injectable({
    providedIn: 'root',
  })
 export class AuthGuard implements CanActivate {

    
    constructor(private spotifyAuthService:SpotifyAuthService,private router :Router){

    }

    private readonly URL_PRE_CALLBACK = 'url_pre_callback'
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        console.log(this.spotifyAuthService);
        let returnStatus = false;
        this.setPreCallbackUrl(state.url)
        this
        if(!this.spotifyAuthService.isLoggedIn()){
            this.router.navigate(['login']);
            return returnStatus;
        }
        returnStatus = true;
        return returnStatus;
    }

    setPreCallbackUrl(url:string): void {
        sessionStorage.setItem(this.URL_PRE_CALLBACK,url);
    }
 }

 
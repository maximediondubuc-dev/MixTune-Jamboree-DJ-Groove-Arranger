import {Injectable, inject } from '@angular/core'
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { AccessToken, IAuthStrategy, SdkConfiguration } from '@spotify/web-api-ts-sdk';


@Injectable({providedIn:'root'})
export class SpotifyAuthService extends AuthService implements IAuthStrategy{
   constructor(){
    super(environment.spotifyAuthConfig);
   }

  async noAccountLogin(){
    //call server to obtain client credentials token
    let token = await fetch(`${environment.api.host}/api/spotify/token`) as any
    //set token
    this.setJwt(token);
    
   }

   setConfiguration(configuration: SdkConfiguration): void {
       
   }
   getOrCreateAccessToken(): Promise<AccessToken> {
       return this.formatToken();
   }

   private async formatToken():Promise<AccessToken>{
        let accessToken = super.getJwt();
        return {
            access_token : accessToken.accessToken,
            token_type: 'bearer',
            refresh_token : accessToken.refreshToken ? accessToken.refreshToken : "",
            expires : accessToken.expiresAt ? accessToken.expiresAt : 0,
            expires_in : accessToken.expiresAt ? accessToken.expiresAt : 0
        }
   }

   getAccessToken(): Promise<AccessToken | null> {
    return this.formatToken();
}
   removeAccessToken(): void {
    this.logout();
   }
   
}
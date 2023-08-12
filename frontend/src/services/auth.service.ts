import {AuthConfig,OAuthService} from 'angular-oauth2-oidc'
import {Injectable, inject } from '@angular/core'
import { OAuth2Client, generateCodeVerifier } from '@badgateway/oauth2-client';
import { ClientSettings } from '@badgateway/oauth2-client/dist/client';

const SPOTIFY_TOKEN_KEY = 'SPOTIFY_TOKEN';
@Injectable({providedIn:'root'})
export class AuthService{
    private oAuthClient!:OAuth2Client;
    private config:any;
    private codeVerifier:string="";
    async authInit(config:any){
        this.config = config;
        this.oAuthClient = new OAuth2Client(config as ClientSettings)
        this.codeVerifier = await generateCodeVerifier();

    }

    public async login():Promise<void>{
        const codeVerifier = this.codeVerifier;

        // In a browser this might work as follows:
        document.location = await this.oAuthClient.authorizationCode.getAuthorizeUri({

        // URL in the app that the user should get redirected to after authenticating
        redirectUri: this.config.redirectUri,

        // Optional string that can be sent along to the auth server. This value will
        // be sent along with the redirect back to the app verbatim.
        state: 'some-string',

        codeVerifier,

        scope: this.config.scope ,

        });
    }
    public async handleCallback():Promise<void>{
        const codeVerifier = this.codeVerifier;

        const oauth2Token = await this.oAuthClient.authorizationCode.getTokenFromCodeRedirect(
            document.location as any,
            {
              /**
               * The redirect URI is not actually used for any redirects, but MUST be the
               * same as what you passed earlier to "authorizationCode"
               */
              redirectUri: this.config.redirectUri,
          
              /**
               * This is optional, but if it's passed then it also MUST be the same as
               * what you passed in the first step.
               *
               * If set, it will verify that the server sent the exact same state back.
               */
              state: 'some-string',
          
              codeVerifier,
          
            }
          );

        sessionStorage.setItem(SPOTIFY_TOKEN_KEY,oauth2Token.accessToken)
    }
    public getAccessToken():string | null {
        return sessionStorage.getItem(SPOTIFY_TOKEN_KEY);
    }
    public isLoggedIn():boolean {
        return this.getAccessToken() != null;
    }
   
}
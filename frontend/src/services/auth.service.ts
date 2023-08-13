import {Injectable, inject } from '@angular/core'
import { OAuth2Client, generateCodeVerifier } from '@badgateway/oauth2-client';
import { ClientSettings } from '@badgateway/oauth2-client/dist/client';

const SPOTIFY_TOKEN_STORAGE_KEY = 'SPOTIFY_TOKEN';
const STATE_STRING = `Mixtune-Jamboree`
@Injectable({providedIn:'root'})
export class AuthService{
    private oAuthClient!:OAuth2Client;
    private config:any;
    async authInit(config:any){
        this.config = config;
        this.oAuthClient = new OAuth2Client(config as ClientSettings)
    }

    private async getCodeVerifier() : Promise<string>{
        const CODE_VERIFIER_STORAGE_KEY = "CODE_VERIFIER";
        let codeVerifier = sessionStorage.getItem(CODE_VERIFIER_STORAGE_KEY);
        if(!codeVerifier){
            codeVerifier = await generateCodeVerifier();
            sessionStorage.setItem(CODE_VERIFIER_STORAGE_KEY,codeVerifier);
        }
        return codeVerifier;
    }

    public async login():Promise<void>{
        const codeVerifier = await this.getCodeVerifier()

        document.location = await this.oAuthClient.authorizationCode.getAuthorizeUri({
        redirectUri: this.config.redirectUri,
        state: STATE_STRING,
        codeVerifier,
        scope: this.config.scope ,
        });
    }
    public async handleCallback():Promise<void>{
        const codeVerifier = await this.getCodeVerifier()

        const oauth2Token = await this.oAuthClient.authorizationCode.getTokenFromCodeRedirect(
            document.location as any,
            {
              redirectUri: this.config.redirectUri,
              state: STATE_STRING,
              codeVerifier,
            }
          );

        sessionStorage.setItem(SPOTIFY_TOKEN_STORAGE_KEY,oauth2Token.accessToken)
    }
    public getAccessToken():string | null {
        return sessionStorage.getItem(SPOTIFY_TOKEN_STORAGE_KEY);
    }
    public isLoggedIn():boolean {
        return this.getAccessToken() != null;
    }
   
}
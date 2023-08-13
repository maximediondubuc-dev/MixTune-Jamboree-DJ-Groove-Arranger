import { OAuth2Client, OAuth2Token, generateCodeVerifier } from '@badgateway/oauth2-client';
import { ClientSettings } from '@badgateway/oauth2-client/dist/client';
import { AuthServiceConfiguration } from 'src/components/models/auth/authServiceConfiguration';

const STATE_STRING = `Mixtune-Jamboree`
export class AuthService{
    jwtStorageKey:string = ''
    private oAuthClient!:OAuth2Client;
    private config:any;

    constructor(config:AuthServiceConfiguration){
        this.authInit(config);
    }

    async authInit(config:AuthServiceConfiguration){
        this.config = config;
        this.jwtStorageKey = config.jwtStorageKey
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

        sessionStorage.setItem(this.jwtStorageKey,JSON.stringify(oauth2Token))
    }
    public getJwt(): OAuth2Token{
        return JSON.parse(sessionStorage.getItem(this.jwtStorageKey) as string)as OAuth2Token
    }
    public isLoggedIn():boolean {
        return this.getJwt() != null;
    }
   
}
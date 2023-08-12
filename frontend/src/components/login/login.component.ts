import { Component, Inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private spotifyAuthService : AuthService){

    }
     
    getSpotifyAuthorizationUri():string{

      var state = "1234567891234567"
      var scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative'; 
      let uri = 'https://accounts.spotify.com/authorize?' +
      this.turnToQueryString({
        response_type: 'code',
        client_id: '1640144d61f247aa901a2b6979a8fca6',
        redirect_uri: 'http://localhost:4200/callback',
        scope,
        state
      })
      return uri;
        
    }

    loginToSpotify(){
      this.spotifyAuthService.login();
    }

    botchLoginCode(){
      location.href = this.getSpotifyAuthorizationUri();

    }
    turnToQueryString(object:any):string{
      return Object.keys(object).map(key => key + '=' + object[key]).join('&');
    }
}

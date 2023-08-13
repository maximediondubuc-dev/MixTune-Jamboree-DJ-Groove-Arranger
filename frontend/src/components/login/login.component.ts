import { Component, Inject, inject } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { SpotifyAuthService } from 'src/services/auth/spotifyAuth.service';
import { SpotifyService } from 'src/services/spotify/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  spotifyAuthService = inject(SpotifyAuthService)

  constructor(){

    }
     
    loginToSpotify(){
      this.spotifyAuthService.login();
    }

}

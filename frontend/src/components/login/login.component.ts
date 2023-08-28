import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  router= inject(Router)
  constructor(){

    }
     
    loginToSpotify(){
      this.spotifyAuthService.login();
    }

    async loginToSpotifyNoAccount(){
      await this.spotifyAuthService.noAccountLogin();
      this.router.navigate(['main']);
    }

}

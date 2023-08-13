import { HttpClient } from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import { IAuthStrategy, Playlist, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { SdkConfiguration, AccessToken } from '@spotify/web-api-ts-sdk/dist/mjs/types';
import { SpotifyAuthService } from '../auth/spotifyAuth.service';

@Injectable({
    providedIn: 'root',
  })
export class SpotifyService {
    authService = inject(SpotifyAuthService)
    spotifyApi!:SpotifyApi 

    constructor(){
        this.initialize();
    }

    initialize(){
        this.spotifyApi = new SpotifyApi(this.authService)
    }

    async getPlaylist(playlistId:string):Promise<Playlist>{
        console.log("here");
        let token = await this.spotifyApi.getAccessToken()
        console.log(token);
        return this.spotifyApi.playlists.getPlaylist(playlistId)
    }

}

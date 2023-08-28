import {Injectable, inject} from '@angular/core'
import { Page, Playlist, SimplifiedPlaylist, SpotifyApi } from '@spotify/web-api-ts-sdk';

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
        return this.spotifyApi.playlists.getPlaylist(playlistId,"CA","description,tracks(items(track(artists,name,id)))")
    }
    async getNoAccountPlaylist(playlistId:string):Promise<Playlist>{
        return this.spotifyApi.playlists.getPlaylist(playlistId)
    }

    async getUserPlaylists():Promise<Page<SimplifiedPlaylist>>{
        return this.spotifyApi.currentUser.playlists.playlists();
    }

}

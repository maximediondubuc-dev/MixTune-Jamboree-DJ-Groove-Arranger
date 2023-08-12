import { HttpClient } from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
  })
export class SpotifyService {
    httpClient = inject(HttpClient) 
    getPlaylist(playlistId:string) : Observable<any>{
        return this.httpClient.get<any>(`https://api.spotify.com/v1/playlists/${playlistId}`)
    }
}
import { Component, inject } from '@angular/core';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpotifyService } from 'src/services/spotify/spotify.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  spotifyService = inject(SpotifyService)
  originalItemList:string[]= [].map(x=>'item ' + x);

  // async getPlaylistOld(){
  //   let playlistId = "64Wacl7nubHp20HQuLs8B6"
  //   let response = await firstValueFrom(this.spotifyService.getPlaylist(playlistId));
  //   this.originalItemList= response.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)
  // }

  async getPlaylist(){
    let playlist = await this.spotifyService.getPlaylist("64Wacl7nubHp20HQuLs8B6");
    this.originalItemList= playlist.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)

  }

}

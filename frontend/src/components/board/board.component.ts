import { Component, inject } from '@angular/core';
import { Page, SimplifiedPlaylist, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpotifyService } from 'src/services/spotify/spotify.service';
import { PlaylistSelectionComponent } from '../playlist-selection/playlist-selection.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(public dialog: MatDialog) {

  }


  spotifyService = inject(SpotifyService)
  originalItemList:string[]= [].map(x=>'item ' + x);
  playlists!:Page<SimplifiedPlaylist>;


  async getPlaylist(){
    let playlist = await this.spotifyService.getPlaylist("64Wacl7nubHp20HQuLs8B6");
    this.originalItemList= playlist.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)

  }

  async getPlaylists(){
    this.playlists = await this.spotifyService.getUserPlaylists();
  }
  async openPlaylistSelection(){
    await this.getPlaylists();
    this.dialog.open(PlaylistSelectionComponent, {
      data: {
        playlists : this.playlists
      },
    }).afterClosed().subscribe(async playlist => {
      console.log(playlist)
      let p = await this.spotifyService.getPlaylist(playlist.id);
      this.originalItemList= p.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)      });

  }
}

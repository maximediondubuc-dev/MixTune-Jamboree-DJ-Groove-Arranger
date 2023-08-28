import { Component, inject } from '@angular/core';
import { Page, Playlist, SimplifiedPlaylist, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpotifyService } from 'src/services/spotify/spotify.service';
import { PlaylistSelectionComponent } from '../playlist-selection/playlist-selection.component';
import { MatDialog } from '@angular/material/dialog';
import { SpotifyAuthService } from 'src/services/auth/spotifyAuth.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(public dialog: MatDialog) {
      this.openPlaylistSelection();
  }


  spotifyService = inject(SpotifyService)
  spotifyAuthService = inject(SpotifyAuthService)

  originalItemList:string[]= [].map(x=>'item ' + x);
  playlists!:Page<SimplifiedPlaylist>;
  selectedPlaylist!:Playlist; 


  async getPlaylist(){
    this.selectedPlaylist = await this.spotifyService.getNoAccountPlaylist("37i9dQZF1DXa8NOEUWPn9W");
    //this.originalItemList= playlist.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)

  }

  async getPlaylists(){
    this.playlists = await this.spotifyService.getUserPlaylists();
  }
  async openPlaylistSelection(){
    if(!this.spotifyAuthService.userHasNoAccount){
      await this.getPlaylists();
      this.dialog.open(PlaylistSelectionComponent, {
        data: {
          playlists : this.playlists
        },
      }).afterClosed().subscribe(async playlist => {
        console.log(playlist)
        let p:Playlist = await this.spotifyService.getPlaylist(playlist.id);
        playlist.tracks = p.tracks;
        console.log(p);
        this.selectedPlaylist = playlist;
      })
    }
    await this.getPlaylist();

    }
    
}

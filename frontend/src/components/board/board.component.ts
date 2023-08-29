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

  playlists!:Page<SimplifiedPlaylist>;
  selectedPlaylist!:Playlist; 


  async getPlaylists(){
    this.playlists = await this.spotifyService.getUserPlaylists();
  }
  async openPlaylistSelection(){
    console.log(this.spotifyAuthService.userHasNoAccount)
    if(!this.spotifyAuthService.userHasNoAccount){
      console.log("in hurr")
      await this.getPlaylists();
    }
      this.dialog.open(PlaylistSelectionComponent, {
        data: {
          playlists : this.playlists,
          hasNoSpotifyAccount : this.spotifyAuthService.userHasNoAccount
        },
      }).afterClosed().subscribe(async playlistId => {
        if(playlistId){
          console.log(playlistId)
          let p:Playlist = await this.spotifyService.getPlaylist(playlistId);
          let deets = await  this.spotifyService.getTrackDetails(p.tracks.items.map(x=>x.track.id));
          console.log(deets);
          this.selectedPlaylist = p;
          console.log(p);
        }
      })
    
    }
    
}

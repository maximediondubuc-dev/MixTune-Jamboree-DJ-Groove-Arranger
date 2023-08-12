import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SpotifyService } from 'src/services/spotify/spotify.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  spotifyService = inject(SpotifyService)
  originalItemList:string[]= [].map(x=>'item ' + x);

  async getPlaylist(){
    let playlistId = "64Wacl7nubHp20HQuLs8B6"
    return await firstValueFrom(this.spotifyService.getPlaylist(playlistId))
   
    // const response = fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': 'Bearer ' + sessionStorage.getItem('SPOTIFY_TOKEN')
    
    //   }
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('HTTP status ' + response.status);
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //     this.originalItemList= data.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)

    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    
  }

}

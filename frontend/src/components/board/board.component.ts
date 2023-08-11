import { Component } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  originalItemList:string[]= [].map(x=>'item ' + x);

  getPlaylist(){
    let playlistId = "64Wacl7nubHp20HQuLs8B6"

   
    const response = fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.originalItemList= data.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name)

      })
      .catch(error => {
        console.error('Error:', error);
      });
    
  }

}

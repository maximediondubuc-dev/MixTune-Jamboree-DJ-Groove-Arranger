import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Page, SimplifiedPlaylist } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'playlist-selection',
  templateUrl: './playlist-selection.component.html',
  styleUrls: ['./playlist-selection.component.scss']
})
export class PlaylistSelectionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<PlaylistSelectionComponent>) { }

  validUrlInput=false;
  url=""
  playlistSelected(playlist:SimplifiedPlaylist){
    this.dialogRef.close(playlist.id);
  }
  urlInputChanged(event:any){
    this.validUrlInput = this.isValidSpotifyPlaylistUrl(event.target.value)
    if(this.validUrlInput){
      this.url = event.target.value
    }
  }

  loadPlaylistFromUrl(){
    let playlistId = this.extractPlaylistIdFromSpotifyLink(this.url);
    this.dialogRef.close(playlistId)
  }
  isValidSpotifyPlaylistUrl(url:string) {
    const spotifyPlaylistRegex = /^https?:\/\/open\.spotify\.com\/playlist\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/;
    return spotifyPlaylistRegex.test(url);
  }
  extractPlaylistIdFromSpotifyLink(spotifyPlaylistLink:string) {
    const playlistIdRegex = /playlist\/([a-zA-Z0-9]+)/;
    const matches = spotifyPlaylistLink.match(playlistIdRegex);
  
    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return null;
    }
  }

  closeDialog() {
    this.dialogRef.close('');
  }

}

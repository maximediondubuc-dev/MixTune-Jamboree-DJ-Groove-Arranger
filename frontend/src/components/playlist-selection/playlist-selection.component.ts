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

  @Input()
  playlists!:Page<SimplifiedPlaylist>



  playlistSelected(playlist:SimplifiedPlaylist){
    this.dialogRef.close(playlist);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}

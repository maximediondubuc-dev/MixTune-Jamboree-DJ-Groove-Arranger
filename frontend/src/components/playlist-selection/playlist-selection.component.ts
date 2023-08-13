import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Page, SimplifiedPlaylist } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'playlist-selection',
  templateUrl: './playlist-selection.component.html',
  styleUrls: ['./playlist-selection.component.scss']
})
export class PlaylistSelectionComponent {
  constructor(public dialogRef: MatDialogRef<PlaylistSelectionComponent>) { }

  @Input()
  playlists!:Page<SimplifiedPlaylist>


  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}

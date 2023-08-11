import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SafePipe } from 'src/pipe/safe.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public dialog: MatDialog){
    }
    openDialog() {
      const dialogRef = this.dialog.open(DialogAnimationsExampleDialog,{
        data: { URI: this.getSpotifyAuthorizationUri() },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    getSpotifyAuthorizationUri():string{

      var state = "1234567891234567"
      var scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative'; 
      let uri = 'https://accounts.spotify.com/authorize?' +
      this.turnToQueryString({
        response_type: 'code',
        client_id: '1640144d61f247aa901a2b6979a8fca6',
        redirect_uri: 'http://localhost:4200/callback',
        scope,
        state
      })
      return uri;
        
    }

    redirectToLogin(){
      location.href = this.getSpotifyAuthorizationUri();
    }
    turnToQueryString(object:any):string{
      return Object.keys(object).map(key => key + '=' + object[key]).join('&');
    }
}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'login-dialog.html'
})
export class DialogAnimationsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {URI: string},public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {
    console.log(data);
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  authService = inject(AuthService)
  public ngOnInit():void {
  
      this.authService.handleCallback().then(()=>this.router.navigate(['/']));
  }
  private botchLoginCode(){
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    let codeVerifier = localStorage.getItem('code_verifier');
    let redirectUri = "http://localhost:4200/callback";
    let client_id="1640144d61f247aa901a2b6979a8fca6";
    let client_secret="008bb77906b047a9adf9a2412969872b"
    let body = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    };

    const response = fetch('https://accounts.spotify.com/api/token', {
method: 'POST',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)

},
body: this.turnToQueryString(body) as any
})
.then(response => {
  if (!response.ok) {
    throw new Error('HTTP status ' + response.status);
  }
  return response.json();
})
.then(data => {
  console.log(data);
  localStorage.setItem('access_token', data.access_token);
})
.catch(error => {
  console.error('Error:', error);
});
  }

  turnToQueryString(object:any):string{
    return Object.keys(object).map(key => key + '=' + object[key]).join('&');
  }
}
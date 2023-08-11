import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit():void {
    const urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.get('code');
      let codeVerifier = localStorage.getItem('code_verifier');
      let redirectUri;
      let clientId;
      let body = {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier
      };

      const response = fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body as any
})
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('access_token', data.access_token);
  })
  .catch(error => {
    console.error('Error:', error);
  });


      const token = this.route.snapshot.queryParamMap.get('token');
      if(token)
        window.localStorage.setItem('token',token)
      // Handle token
      // ...
      this.router.navigate(['/']);
  }
}
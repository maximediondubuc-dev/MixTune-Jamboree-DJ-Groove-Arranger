import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { SpotifyAuthService } from 'src/services/auth/spotifyAuth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}    
  authService = inject(SpotifyAuthService)

  public ngOnInit():void {
    this.authService.handleCallback().then(()=>this.router.navigate(['/']));
  }
 
}
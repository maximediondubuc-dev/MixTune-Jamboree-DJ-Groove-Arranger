import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAuthService } from 'src/services/auth/spotifyAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  spotifyAuthService = inject(SpotifyAuthService)
  router = inject(Router)
  panelOpenState = false;

  async ngOnInit(): Promise<void> {

  }
  logout() : void {
    this.spotifyAuthService.logout();
    this.router.navigate(["/"])
  }
  title = 'Mixtune-Jamboree';
}

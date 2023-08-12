import { Component, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  spotifyAuthService = inject(AuthService)
  spotifyAuthConfig : string = JSON.stringify(environment.spotifyAuthConfig)
  ngOnInit(): void {
    this.spotifyAuthService.authInit(this.spotifyAuthConfig)
  }
  title = 'Mixtune-Jamboree';
}

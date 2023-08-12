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
  spotifyAuthConfig : any = environment.spotifyAuthConfig
  async ngOnInit(): Promise<void> {
    await this.spotifyAuthService.authInit(this.spotifyAuthConfig)
  }
  title = 'Mixtune-Jamboree';
}

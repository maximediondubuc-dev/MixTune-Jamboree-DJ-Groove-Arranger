import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { ItemComponent } from '../components/item/item.component';
import { BoardComponent } from 'src/components/board/board.component';
import { ItemListComponent } from 'src/components/item-list/item-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { CallbackComponent } from 'src/components/callback/callback.component';
import { LoginComponent } from 'src/components/login/login.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { SpotifyAuthInterceptor } from 'src/components/interceptors/spotifyAuthInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    BoardComponent,
    ItemListComponent,
    CallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule, 
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpotifyAuthInterceptor,
    multi: true
  }
    ,
    provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

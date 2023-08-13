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
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from 'src/components/interceptors/AuthInterceptor';
import { PlaylistSelectionComponent } from '../components/playlist-selection/playlist-selection.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from 'src/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    BoardComponent,
    ItemListComponent,
    CallbackComponent,
    LoginComponent,
    PlaylistSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: AuthGuard,
      useClass:AuthGuard
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },

    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    },
    provideHttpClient(/*withInterceptorsFromDi()*/),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

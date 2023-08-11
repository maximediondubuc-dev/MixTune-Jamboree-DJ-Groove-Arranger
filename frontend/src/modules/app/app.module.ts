import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../components/app/app.component';
import { ItemComponent } from '../../components/item/item.component';
import { BoardComponent } from 'src/components/board/board.component';
import { ItemListComponent } from 'src/components/item-list/item-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { CallbackComponent } from 'src/components/callback/callback.component';
import { DialogAnimationsExampleDialog, LoginComponent } from 'src/components/login/login.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SafePipe } from 'src/pipe/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    BoardComponent,
    ItemListComponent,
    CallbackComponent,
    LoginComponent,
    DialogAnimationsExampleDialog,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule, 
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

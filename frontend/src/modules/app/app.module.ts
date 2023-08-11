import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../components/app/app.component';
import { ItemComponent } from '../../components/item/item.component';
import { BoardComponent } from 'src/components/board/board.component';
import { ItemListComponent } from 'src/components/item-list/item-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { CallbackComponent } from 'src/components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    BoardComponent,
    ItemListComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

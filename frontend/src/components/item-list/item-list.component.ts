import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Playlist } from '@spotify/web-api-ts-sdk';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnChanges {
  @Input({ required: true }) title!: string;
  @Input({ required: false }) titleColor!: string;
  @Input() itemList!: string[]
  @Input() canCreateNewItems:boolean = false;
  @Input() playlist!:Playlist
  ongoingItemCreation:boolean = false;

  constructor() {
    if (!this.itemList) {
      this.itemList = [];
    }
  }
  ngOnChanges(): void {
    this.itemList = this.playlist.tracks.items.map((item:any)=>item.track.artists[0].name +" - "+ item.track.name);
    this.title = this.playlist.name
  }

  startItemCreation(){
    this.ongoingItemCreation = true;
  }

  completeItemCreation(value:string){
    this.ongoingItemCreation = false;
    this.itemList.unshift(value)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    //Emit event here to sync state
  }
  
}

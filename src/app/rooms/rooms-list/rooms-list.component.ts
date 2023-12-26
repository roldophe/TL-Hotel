import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit ,OnChanges{
  @Input() rooms:RoomList[]=[];

  @Input() title:string = '';
  @Input() price  = 0;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  constructor() { }
  ngOnInit(): void {

  }
  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }
}

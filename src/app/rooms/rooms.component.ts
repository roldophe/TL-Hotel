import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'TL ROOMS';
  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom !: RoomList;
  roomList: RoomList[] = [];


  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomsService: RoomsService) { }

  ngAfterViewChecked(): void {
    //this.headerComponent.title ="Room View"
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Room View"
  }
  ngDoCheck(): void {
    // this.headerComponent.title ="Room View"
  }

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title = 'Room List';
  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = 'Room List';
  }
  selectRoom(room: RoomList) {
    // console.log(room)
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 104,
      roomType: "Duluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 14000,
      photos: "https://th.bing.com/th/id/OIP.YTGQcpOpfSPfAqBj6aTB2wHaE8?rs=1&pid=ImgDetMain",
      checkinTime: new Date('12-Dec-2023'),
      checkoutTime: new Date('12-Dec-2024'),
      rating: 4.46
    };
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }
}

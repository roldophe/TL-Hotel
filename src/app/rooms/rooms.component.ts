import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'TL ROOMS';
  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom !: RoomList;
  roomList: RoomList[] = [];


  constructor() { }
  
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title = 'Room List';
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 105,
        roomType: "Oral Room",
        amenities: "Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen",
        price: 500,
        photos: "https://bowa.com/wp-content/uploads/2015/07/MAY-Potomac-MD-Whole-House-Renovation-Sitting-Room.jpg",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('11-Nov-2024'),
        rating: 4.55
      },
      {
        roomNumber: 101,
        roomType: "Duluxe Room",
        amenities: "Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen",
        price: 1000,
        photos: "https://th.bing.com/th/id/OIP.YTGQcpOpfSPfAqBj6aTB2wHaE8?rs=1&pid=ImgDetMain",
        checkinTime: new Date('19-Nov-2023'),
        checkoutTime: new Date('19-Nov-2024'),
        rating: 2.46
      },
      {
        roomNumber: 205,
        roomType: "Liquid Room",
        amenities: "Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen",
        price: 600,
        photos: "https://th.bing.com/th/id/OIP.tVyVUZKDKZG90vLtbKZwwgHaE8?w=1500&h=1001&rs=1&pid=ImgDetMain",
        checkinTime: new Date('12-Nov-2023'),
        checkoutTime: new Date('16-Nov-2024'),
        rating: 2.34
      },
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title='Room List';
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

import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
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
  ];
  constructor() { 
    console.log("Room service initialized...!"); 
  }
  getRooms(){
    return this.roomList;
  }
}

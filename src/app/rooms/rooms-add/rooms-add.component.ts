import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../service/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };
  constructor(private roomService: RoomsService) {}
  ngOnInit(): void {
    console.log(this.room);
  }
  successMessage: string = '';
  AddRoom(roomsForm: NgForm) {
    this.roomService
      .addRoom(this.room)
      .subscribe((data) => {
        this.successMessage = 'Room added successfully';
        roomsForm.resetForm({
          roomType: '',
          amenities: '',
          price: 0,
          photos: '',
          checkinTime: new Date(),
          checkoutTime: new Date(),
          rating: 0,
        });
    });
  }
}

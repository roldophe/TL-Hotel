import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './service/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'TL ROOMS';
  numberOfRooms = 10;
  totaBytes = 0;
  hideRooms = false;

  selectedRoom !: RoomList;
  roomList: RoomList[] = [];


  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error(err => observer.error(err));
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomsService: RoomsService,
    private configService:ConfigService) { }

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
    this.roomsService.getPhotos().subscribe((event) => {
      // console.log(data);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request successfully!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totaBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body)
        }
      }
    })

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    this.stream.subscribe((data) => { console.log(data) })
    
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    })
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = 'Room List';
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '2',
      roomType: "Standard Room",
      amenities: "Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 56000,
      photos: "https://th.bing.com/th/id/OIP.YTGQcpOpfSPfAqBj6aTB2wHaE8?rs=1&pid=ImgDetMain",
      checkinTime: new Date('12-Dec-2023'),
      checkoutTime: new Date('12-Dec-2024'),
      rating: 4.46
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    })
  }
  selectRoom(room: RoomList) {
    // console.log(room)
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: '7',
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

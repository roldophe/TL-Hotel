import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/RoomBookingComponent';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { RouteConfigToken } from '../services/routeConfig.service';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
    RoomsAddComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    MatButtonModule
  ],
  providers:[
    {
      provide: RouteConfigToken,
      useValue: { title: 'Room' },
    }
  ]
})
export class RoomsModule { }

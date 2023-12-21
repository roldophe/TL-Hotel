import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomBookingComponent } from './room-booking/RoomBookingComponent';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomsAddComponent },
  { path: 'rooms/:id', component: RoomBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }

import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomBookingComponent } from './room-booking/RoomBookingComponent';
import { RoomGuard } from './guards/room.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild: [RoomGuard],
    children: [
      { path: 'add', component: RoomsAddComponent },
      // { path: ':id', component: RoomBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ConfigService } from '../services/config.service';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { 
  constructor(private configService:ConfigService){}
}

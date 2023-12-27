import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FilterPipe } from '../rooms/filter.pipe';


@NgModule({
  declarations: [
    UserComponent,
    FilterPipe  
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

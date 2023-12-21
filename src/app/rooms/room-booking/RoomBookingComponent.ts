import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
export class RoomBookingComponent implements OnInit {
  id: number = 0;
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));
  
  constructor(private router: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log(this.id);
    // this.router.params.subscribe((param=>{
    //   console.log(param)
    //   this.id = param['id'];
    // }))
    // this.id = this.router.snapshot.params['id'];
  }
}

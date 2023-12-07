import { ContainerComponent } from './container/container.component';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "TL Hotel";
  }
  constructor(){}

  // role = 'Admin';
  //@ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms =50
  // }
}

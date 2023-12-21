import { ContainerComponent } from './container/container.component';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    //this.name.nativeElement.innerText = "TL Hotel";
  }
  constructor(@Inject(localStorageToken) private localStorage:any){

  }

  // role = 'Admin';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms =50
  // }
}

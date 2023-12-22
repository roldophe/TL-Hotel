import { ContainerComponent } from './container/container.component';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigService } from './services/config.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  @ViewChild('name', { static: true }) name!: ElementRef;

 
  constructor(@Inject(localStorageToken) 
  private localStorage:any,
  private configService:ConfigService,
  private router: Router){

  }

  ngOnInit(): void {
    //this.name.nativeElement.innerText = "TL Hotel";
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('NavigationStarted', event);
    })
  }
  // role = 'Admin';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms =50
  // }
}

import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {


  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(private roomsService: RoomsService) {
  }
  

  ngOnInit(): void {
   console.log('ngAfterContentInit',this.employee)
    this.employee.empName="Kaka";
  }
  ngAfterContentInit(): void {
    
  }

}

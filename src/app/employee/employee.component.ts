import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'Jonh';
  constructor(private configService:ConfigService) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string='';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  constructor(private configService:ConfigService){}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}
  
  ngOnInit(): void {
    this.login();
  }
  login() {
    if (this.loginService.login(this.email, this.password)) {
      console.log('Login successful');
      this.router.navigate(['/rooms']);
    }
  }
}

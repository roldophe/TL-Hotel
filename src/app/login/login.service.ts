import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() {}
  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
      alert('Login Successfully!!');
      //console.log('Login Successfully!!',this.isLoggedIn)
    }
    if (email === 'admin@gmail.com' && password === '12345') {
      this.isLoggedIn = true;
      this.isAdmin = false;
      alert('Login Successfully!!');
      //console.log('Login Successfully!!',this.isLoggedIn)
    }
    return this.isLoggedIn;
  }
}

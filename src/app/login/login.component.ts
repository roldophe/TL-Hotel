import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string='';

  constructor(private router:Router){}
  ngOnInit(): void {
    

  }
  login(){

    if(this.email ==="admin@gmail.com" && this.password ==="Admin"){
      alert("Login Successfully!!");
      // this.router.navigate(['/rooms','add']);
        this.router.navigateByUrl('/rooms/add');
    }
  }
}

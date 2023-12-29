import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }
}

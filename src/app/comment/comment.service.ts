import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    private route: Router,
    private http: HttpClient,
  ) {}
  getComments() {
    return this.http.get<Comments[]>(
      'https://jsonplaceholder.typicode.com/comments',
    );
  }
}

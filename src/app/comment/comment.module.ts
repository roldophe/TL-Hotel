import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule
  ],
})
export class CommentModule {}

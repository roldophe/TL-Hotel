import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));
  isSmallScreen = false;
  dataSource!: MatTableDataSource<any>; // Add the "!" operator to indicate it will be initialized in the constructor
  displayedColumns: string[] = ['id', 'name', 'email','body'];

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(data=>console.log(data['comments']));
    this.commentService.getComments().subscribe((comments) => {
      this.dataSource = new MatTableDataSource<any>(comments);
    });
  }
  searchText: string = '';
  showDropdownFlag: boolean = false;

  showDropdown(): void {
    this.showDropdownFlag = true;
  }

  clearSearch(): void {
    this.searchText = '';
    this.applyFilter();
    this.showDropdownFlag = false;
  }
  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.filteredData.length === 0) {
      this.snackBar.open('Search result not found. Input is required.', 'Close', {
        duration: 5000, // Duration in milliseconds
      });
    }
  }
}

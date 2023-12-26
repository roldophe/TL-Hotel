import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  dataSource!: MatTableDataSource<any>; // Add the "!" operator to indicate it will be initialized in the constructor
  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
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
  }
}

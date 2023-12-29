import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Users } from './user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Users[] = [];
  dataSource!: MatTableDataSource<Users>;
  displayedColumns: string[] = ['id', 'name','company','address', 'website', 'email', 'phone'];
  errorMessage:string ='';
  selectedUser: Users | null = null; // Property to store the selected user

  constructor(
    private userService: UserService,
  ) {
    this.dataSource = new MatTableDataSource<Users>([]);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource<Users>(users);
      console.log("dataSource",this.dataSource.filteredData);
    });
  }

  logUsers(): void {
    console.log(this.users);
  }

  selectUser(user: Users): void {
    this.selectedUser = user; // Store the selected user
    console.log('Selected User:', user); // Log the selected user
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
      this.errorMessage = 'Input is required!';
    } else {
      this.errorMessage = ''; // Clear the error message if there are search results
    }
  }
}
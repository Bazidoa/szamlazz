import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { UserTableComponent } from "../../components/user-table/user-table.component";
import { User } from '../../models/user-interface';
import { UserService } from '../../services/user.service';
import { PaginatorComponent } from '../../../../shared/paginator/paginator.component';
import { Pageable } from '../../../../shared/pageable.interface';

@Component({
  selector: 'app-user-search-view',
  imports: [UserTableComponent, CommonModule, PaginatorComponent],
  templateUrl: './user-search-view.component.html',
  styleUrls: ['./user-search-view.component.scss']
})
export class UserSearchViewComponent implements OnInit {

  users$: Observable<User[]> = new Observable<User[]>();
  pageable: Pageable = { pageNumber: 0, pageSize: 5, offset: 0, paged: true, unpaged: false }
  totalElements = 0

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.searchUsers();
  }

  onPageChange(newPage: number) {
  this.pageable.pageNumber = newPage;
  this.searchUsers();
}

  searchUsers(): void {
    this.users$ = this.userService.searchUsers(this.pageable.pageNumber, this.pageable.pageSize)
      .pipe(
        tap(page => this.totalElements = page.totalElements),
        map(page => page.content )
      );
  }
}

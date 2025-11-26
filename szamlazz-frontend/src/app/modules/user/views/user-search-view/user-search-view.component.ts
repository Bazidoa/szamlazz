import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
import { Pageable } from '../../../../shared/pageable.interface';
import { PaginatorComponent } from '../../../../shared/paginator/paginator.component';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { UserTableComponent } from "../../components/user-table/user-table.component";
import { Usr } from '../../models/user-interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-search-view',
  imports: [UserTableComponent, CommonModule, PaginatorComponent, CustomButtonComponent],
  templateUrl: './user-search-view.component.html',
  styleUrls: ['./user-search-view.component.scss']
})
export class UserSearchViewComponent implements OnInit {

  users$: Observable<Usr[]> = new Observable<Usr[]>();
  pageable: Pageable = { pageNumber: 0, pageSize: 5, offset: 0, paged: true, unpaged: false }
  totalElements = 0

  constructor(
    private userService: UserService,
    private navigationService: NavigationService
  ) { 
    // ezt alapvetően inkább ngrx storeban tárolnám, az egész paginationnel (és search fieldekkel) együtt 
    // de azt hiszem ebben a scopeban az már túllőne a célon 
    if(sessionStorage.getItem("user_page_number")){
      this.pageable.pageNumber = Number(sessionStorage.getItem("user_page_number"));
      sessionStorage.removeItem("user_page_number");
    }
  }

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
        map(page => page.content)
      );
  }

  onCreateUser(): void {
    this.navigationService.navigateToUserCreate();
  }

  onDelete(user: Usr): void {
    if (!confirm("Biztosan ki szeretnéd törölni a " + user.lastname + " " + user.firstname + " nevű felhasználót?")) {
      return;
    }
    this.userService.deleteUser(user.id!).subscribe({
      next: () => this.searchUsers(),
      error: err => console.log("ERROR FIRED:", err),
    });
  }

  onUpdate(userId: number): void {
    sessionStorage.setItem("user_page_number", this.pageable.pageNumber.toString());
    this.navigationService.navigateToUserUpdate(userId);
  }
}

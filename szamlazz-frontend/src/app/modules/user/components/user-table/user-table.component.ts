import { Component, Input } from '@angular/core';
import { User } from '../../models/user-interface';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../../../../shared/paginator/paginator.component';
import { Page, Pageable } from '../../../../shared/pageable.interface';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, PaginatorComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  @Input() users: User[] = [];
  @Input() pageable!: Pageable;

}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pageable } from '../../../../shared/pageable.interface';
import { User } from '../../models/user-interface';
import { CustomButtonComponent } from "../../../../shared/custom-button/custom-button.component";

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  @Input() users: User[] = [];
  @Input() pageable!: Pageable;
  @Output() deleteEmitter: EventEmitter<User> = new EventEmitter<User>()
  @Output() updateEmitter: EventEmitter<number> = new EventEmitter<number>()

}

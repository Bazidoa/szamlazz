import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() pageNumber = 0;
  @Input() pageSize = 5;
  @Input() totalElements = 0;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.pageSize);
  }

  previous() {
    this.pageChange.emit(this.pageNumber -1);
  }

  next() {
    this.pageChange.emit(this.pageNumber + 1);
  }
}
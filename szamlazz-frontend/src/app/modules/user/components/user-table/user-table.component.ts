import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomButtonComponent } from "../../../../shared/custom-button/custom-button.component";
import { Pageable } from '../../../../shared/pageable.interface';
import { BooleanToTextPipe } from '../../../../shared/pipes/boolean-to-text.pipe';
import { JobDisplayPipe } from '../../../../shared/pipes/job-display.pipe';
import { Usr } from '../../models/user-interface';
import { ButtonType } from '../../../../shared/enums/button-type.enum';

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, CustomButtonComponent, BooleanToTextPipe, JobDisplayPipe],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  @Input() users: Usr[] = [];
  @Input() pageable!: Pageable;
  @Output() deleteEmitter: EventEmitter<Usr> = new EventEmitter<Usr>();
  @Output() updateEmitter: EventEmitter<number> = new EventEmitter<number>();
  buttonType = ButtonType;

}

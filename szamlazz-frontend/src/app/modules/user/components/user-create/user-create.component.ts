import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobEnum } from '../../models/job-type';
import { UserForm } from '../../models/user-form.interface';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {

  @Input() userForm!: FormGroup<UserForm>;
  jobOptions = Object.values(JobEnum);

}

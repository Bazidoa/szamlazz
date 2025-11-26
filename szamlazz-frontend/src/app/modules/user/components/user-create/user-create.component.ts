import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { JobDisplayPipe } from '../../../../shared/pipes/job-display.pipe';
import { JobEnum } from '../../models/job-type';
import { UserForm } from '../../models/user-form.interface';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule, JobDisplayPipe, NgSelectModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

  @Input() userForm!: FormGroup<UserForm>;
  jobOptions = Object.values(JobEnum);

}

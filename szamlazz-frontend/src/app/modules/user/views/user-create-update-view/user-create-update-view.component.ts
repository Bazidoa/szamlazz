import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import { UserForm } from '../../models/user-form.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create-update-view',
  imports: [UserCreateComponent, CommonModule, CustomButtonComponent],
  templateUrl: './user-create-update-view.component.html',
  styleUrl: './user-create-update-view.component.scss'
})
export class UserCreateUpdateViewComponent implements OnInit {

  userForm: FormGroup<UserForm>;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.fb.group({
      firstname: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
      }),
      lastname: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
      }),
      address: new FormControl<string | null>('', [Validators.maxLength(128)]),
      telephone: new FormControl<string | null>('', [Validators.maxLength(128)]),
      active: new FormControl<boolean>(false, { nonNullable: true }),
      job: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }

  createUser(): void {
    if (this.userForm.valid) {
      const user = this.userForm.getRawValue();
      this.userService.createUser(user).subscribe({
        next: () => this.navigationService.navigateToUserSearch(),
        error: (err) => console.error('Error creating user:', err)
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  cancel(): void {
    this.navigationService.navigateToUserSearch();
  }

}

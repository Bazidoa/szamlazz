import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import { UserForm } from '../../models/user-form.interface';
import { Usr } from '../../models/user-interface';
import { UserService } from '../../services/user.service';
import { ButtonType } from '../../../../shared/enums/button-type.enum';
import { HUNGARIAN_PHONE_REGEX } from '../../../../shared/services/form-validator-helpers';

@Component({
  selector: 'app-user-create-update-view',
  imports: [UserCreateComponent, CommonModule, CustomButtonComponent],
  templateUrl: './user-create-update-view.component.html',
  styleUrls: ['./user-create-update-view.component.scss']
})
export class UserCreateUpdateViewComponent implements OnInit {

  userForm: FormGroup<UserForm>;
  user: Usr;
  isUpdate: boolean = false;
  buttonType = ButtonType;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private navigationService: NavigationService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      if (data['user']) {
        this.isUpdate = true;
        this.user = data['user'];
      }
    });
  }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.fb.group({
      firstname: new FormControl<string>(this.user?.firstname ? this.user.firstname : '', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
      }),
      lastname: new FormControl<string>(this.user?.lastname ? this.user.lastname : '', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
      }),
      address: new FormControl<string | null>(this.user?.address ? this.user.address : '', [Validators.maxLength(128)]),
      telephone: new FormControl<string | null>(this.user?.telephone ? this.user.telephone : '', [
        Validators.pattern(HUNGARIAN_PHONE_REGEX)
      ]),
      active: new FormControl<boolean>(this.user?.active ? this.user.active : false, { nonNullable: true }),
      job: new FormControl<string>(this.user?.job ? this.user.job : '', {
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

  updateUser(): void {
    if (this.userForm.valid) {
      let user = this.userForm.getRawValue();
      user = {
        ...user,
        id: this.user.id
      }
      this.userService.updateUser(user).subscribe({
        next: () => this.navigationService.navigateToUserSearch(),
        error: (err) => console.error('Error updating user:', err)
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  deleteUser(): void {
    if (!confirm("Biztosan ki szeretnéd törölni a " + this.user.lastname + " " + this.user.firstname + " nevű felhasználót?")) {
      return;
    }
    this.userService.deleteUser(this.user.id!).subscribe({
      next: () => this.navigationService.navigateToUserSearch(),
      error: err => console.log("ERROR FIRED:", err),
    });
  }

}

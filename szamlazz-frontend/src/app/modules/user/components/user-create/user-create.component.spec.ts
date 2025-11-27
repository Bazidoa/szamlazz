import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateComponent } from './user-create.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HUNGARIAN_PHONE_REGEX } from '../../../../shared/services/form-validator-helpers';
import { UserForm } from '../../models/user-form.interface';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;
  let form: FormGroup<UserForm>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    component.userForm = new FormGroup({
      firstname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
      }),
      lastname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
      }),
      address: new FormControl('', [Validators.maxLength(128)]),
      telephone: new FormControl('', [
        Validators.pattern(HUNGARIAN_PHONE_REGEX)
      ]),
      active: new FormControl(false, { nonNullable: true }),
      job: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

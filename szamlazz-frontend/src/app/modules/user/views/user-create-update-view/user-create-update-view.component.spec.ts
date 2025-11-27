import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockUser } from '../../components/mocks/user.mock';
import { UserService } from '../../services/user.service';
import { UserCreateUpdateViewComponent } from './user-create-update-view.component';

describe('UserCreateUpdateViewComponent', () => {
  let component: UserCreateUpdateViewComponent;
  let fixture: ComponentFixture<UserCreateUpdateViewComponent>;
  let userServiceMock: jasmine.SpyObj<UserService>;


  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['searchUsers', 'deleteUser']);

    await TestBed.configureTestingModule({
      imports: [UserCreateUpdateViewComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ user: mockUser }),
          }
        },
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserCreateUpdateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

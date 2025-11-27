import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { mockUserPage } from '../../components/mocks/user-page.mock';
import { mockUser } from '../../components/mocks/user.mock';
import { UserService } from '../../services/user.service';
import { UserSearchViewComponent } from './user-search-view.component';

describe('UserSearchViewComponent', () => {
  let component: UserSearchViewComponent;
  let fixture: ComponentFixture<UserSearchViewComponent>;

  let userServiceMock: jasmine.SpyObj<UserService>;
  let navigationServiceMock: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['searchUsers', 'deleteUser']);
    navigationServiceMock = jasmine.createSpyObj('NavigationService', ['navigateToUserCreate', 'navigateToUserUpdate']);

    await TestBed.configureTestingModule({
      imports: [UserSearchViewComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: NavigationService, useValue: navigationServiceMock },
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSearchViewComponent);
    component = fixture.componentInstance;
  });

  // -------------------------------------------
  // BASIC CREATION
  // -------------------------------------------
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // -------------------------------------------
  // ngOnInit → searchUsers
  // -------------------------------------------
  it('should call searchUsers on init', () => {
    spyOn(component, 'searchUsers');

    fixture.detectChanges(); // triggers ngOnInit

    expect(component.searchUsers).toHaveBeenCalled();
  });

  // -------------------------------------------
  // searchUsers → service call + totalElements update
  // -------------------------------------------
  it('searchUsers should call userService.searchUsers and update totalElements', (done) => {
    userServiceMock.searchUsers.and.returnValue(of(mockUserPage));

    component.searchUsers();

    component.users$.subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].firstname).toBe('A');
      expect(component.totalElements).toBe(1);
      expect(userServiceMock.searchUsers).toHaveBeenCalledWith(0, 5);
      done();
    });
  });

  // -------------------------------------------
  // Pagination
  // -------------------------------------------
  it('onPageChange should update page number and call searchUsers', () => {
    spyOn(component, 'searchUsers');
    component.onPageChange(3);

    expect(component.pageable.pageNumber).toBe(3);
    expect(component.searchUsers).toHaveBeenCalled();
  });

  // -------------------------------------------
  // Create user → navigation
  // -------------------------------------------
  it('onCreateUser should navigate to user create', () => {
    component.onCreateUser();
    expect(navigationServiceMock.navigateToUserCreate).toHaveBeenCalled();
  });

  // -------------------------------------------
  // Delete user → confirm OK
  // -------------------------------------------
  it('onDelete should call deleteUser and refresh list when confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(component, 'searchUsers');

    userServiceMock.deleteUser.and.returnValue(of(null));

    component.onDelete(mockUser);

    expect(userServiceMock.deleteUser).toHaveBeenCalledWith(10);
    expect(component.searchUsers).toHaveBeenCalled();
  });

  // -------------------------------------------
  // Delete user → cancel
  // -------------------------------------------
  it('onDelete should NOT delete when canceled', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    component.onDelete(mockUser);

    expect(userServiceMock.deleteUser).not.toHaveBeenCalled();
  });

  // -------------------------------------------
  // Update user → save page + navigate
  // -------------------------------------------
  it('onUpdate should store page number and navigate', () => {
    component.pageable.pageNumber = 2;

    component.onUpdate(99);

    expect(sessionStorage.getItem('user_page_number')).toBe('2');
    expect(navigationServiceMock.navigateToUserUpdate).toHaveBeenCalledWith(99);
  });
});
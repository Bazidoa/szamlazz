import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateUpdateViewComponent } from './user-create-update-view.component';

describe('UserCreateUpdateViewComponent', () => {
  let component: UserCreateUpdateViewComponent;
  let fixture: ComponentFixture<UserCreateUpdateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreateUpdateViewComponent]
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

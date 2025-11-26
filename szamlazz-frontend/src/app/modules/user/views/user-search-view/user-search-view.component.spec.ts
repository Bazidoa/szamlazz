import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchViewComponent } from './user-search-view.component';

describe('UserSearchViewComponent', () => {
  let component: UserSearchViewComponent;
  let fixture: ComponentFixture<UserSearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSearchViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

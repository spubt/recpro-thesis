import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModelingComponent } from './user-modeling.component';

describe('UserModelingComponent', () => {
  let component: UserModelingComponent;
  let fixture: ComponentFixture<UserModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

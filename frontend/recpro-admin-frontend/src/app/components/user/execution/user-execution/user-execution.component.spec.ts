import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExecutionComponent } from './user-execution.component';

describe('UserExecutionComponent', () => {
  let component: UserExecutionComponent;
  let fixture: ComponentFixture<UserExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

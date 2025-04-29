import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityParameterExecutionComponent } from './activity-parameter-execution.component';

describe('ActivityParameterExecutionComponent', () => {
  let component: ActivityParameterExecutionComponent;
  let fixture: ComponentFixture<ActivityParameterExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityParameterExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityParameterExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

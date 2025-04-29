import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalBasedFeedbackExecutionComponent } from './interval-based-feedback-execution.component';

describe('IntervalBasedFeedbackExecutionComponent', () => {
  let component: IntervalBasedFeedbackExecutionComponent;
  let fixture: ComponentFixture<IntervalBasedFeedbackExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalBasedFeedbackExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalBasedFeedbackExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

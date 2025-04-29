import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackExecutionComponent } from './feedback-execution.component';

describe('FeedbackExecutionComponent', () => {
  let component: FeedbackExecutionComponent;
  let fixture: ComponentFixture<FeedbackExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryFeedbackExecutionComponent } from './binary-feedback-execution.component';

describe('BinaryFeedbackExecutionComponent', () => {
  let component: BinaryFeedbackExecutionComponent;
  let fixture: ComponentFixture<BinaryFeedbackExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryFeedbackExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryFeedbackExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinalFeedbackExecutionComponent } from './ordinal-feedback-execution.component';

describe('OrdinalFeedbackExecutionComponent', () => {
  let component: OrdinalFeedbackExecutionComponent;
  let fixture: ComponentFixture<OrdinalFeedbackExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinalFeedbackExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinalFeedbackExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackModelingComponent } from './feedback-modeling.component';

describe('FeedbackModelingComponent', () => {
  let component: FeedbackModelingComponent;
  let fixture: ComponentFixture<FeedbackModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

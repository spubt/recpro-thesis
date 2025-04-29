import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextualRecommendationRangeComponent } from './create-textual-recommendation-range.component';

describe('CreateTextualRecommendationRangeComponent', () => {
  let component: CreateTextualRecommendationRangeComponent;
  let fixture: ComponentFixture<CreateTextualRecommendationRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTextualRecommendationRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTextualRecommendationRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNumericRecommendationRangeComponent } from './create-numeric-recommendation-range.component';

describe('CreateNumericRecommendationRangeComponent', () => {
  let component: CreateNumericRecommendationRangeComponent;
  let fixture: ComponentFixture<CreateNumericRecommendationRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNumericRecommendationRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNumericRecommendationRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

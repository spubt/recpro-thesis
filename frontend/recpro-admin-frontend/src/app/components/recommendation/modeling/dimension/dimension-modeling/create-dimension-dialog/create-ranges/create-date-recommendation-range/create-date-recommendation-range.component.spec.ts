import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDateRecommendationRangeComponent } from './create-date-recommendation-range.component';

describe('CreateDateRecommendationRangeComponent', () => {
  let component: CreateDateRecommendationRangeComponent;
  let fixture: ComponentFixture<CreateDateRecommendationRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDateRecommendationRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDateRecommendationRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

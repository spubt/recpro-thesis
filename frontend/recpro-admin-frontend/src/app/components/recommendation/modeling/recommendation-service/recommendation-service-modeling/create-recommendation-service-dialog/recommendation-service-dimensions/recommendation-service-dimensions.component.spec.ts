import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationServiceDimensionsComponent } from './recommendation-service-dimensions.component';

describe('RecommendationServiceDimensionsComponent', () => {
  let component: RecommendationServiceDimensionsComponent;
  let fixture: ComponentFixture<RecommendationServiceDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationServiceDimensionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationServiceDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

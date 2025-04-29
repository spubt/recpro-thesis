import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationServiceModelingComponent } from './recommendation-service-modeling.component';

describe('RecommendationServiceModelingComponent', () => {
  let component: RecommendationServiceModelingComponent;
  let fixture: ComponentFixture<RecommendationServiceModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationServiceModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationServiceModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

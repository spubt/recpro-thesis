import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationModelingComponent } from './recommendation-modeling.component';

describe('RecommendationModelingComponent', () => {
  let component: RecommendationModelingComponent;
  let fixture: ComponentFixture<RecommendationModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

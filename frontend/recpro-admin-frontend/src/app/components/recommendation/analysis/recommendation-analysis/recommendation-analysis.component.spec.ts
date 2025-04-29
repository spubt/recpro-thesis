import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationAnalysisComponent } from './recommendation-analysis.component';

describe('RecommendationAnalysisComponent', () => {
  let component: RecommendationAnalysisComponent;
  let fixture: ComponentFixture<RecommendationAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

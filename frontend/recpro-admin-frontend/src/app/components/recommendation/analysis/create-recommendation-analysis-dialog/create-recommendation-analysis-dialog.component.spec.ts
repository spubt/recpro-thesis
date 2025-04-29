import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecommendationAnalysisDialogComponent } from './create-recommendation-analysis-dialog.component';

describe('CreateRecommendationAnalysisDialogComponent', () => {
  let component: CreateRecommendationAnalysisDialogComponent;
  let fixture: ComponentFixture<CreateRecommendationAnalysisDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecommendationAnalysisDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecommendationAnalysisDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

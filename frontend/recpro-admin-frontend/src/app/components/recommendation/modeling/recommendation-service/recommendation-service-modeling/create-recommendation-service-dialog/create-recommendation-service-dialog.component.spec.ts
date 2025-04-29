import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecommendationServiceDialogComponent } from './create-recommendation-service-dialog.component';

describe('CreateRecommendationServiceDialogComponent', () => {
  let component: CreateRecommendationServiceDialogComponent;
  let fixture: ComponentFixture<CreateRecommendationServiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecommendationServiceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecommendationServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBasedRecommendationServiceDialogComponent } from './knowledge-based-recommendation-service-dialog.component';

describe('KnowledgeBasedRecommendationServiceDialogComponent', () => {
  let component: KnowledgeBasedRecommendationServiceDialogComponent;
  let fixture: ComponentFixture<KnowledgeBasedRecommendationServiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeBasedRecommendationServiceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeBasedRecommendationServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

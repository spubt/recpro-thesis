import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationServiceExecutionComponent } from './recommendation-service-execution.component';

describe('RecommendationServiceExecutionComponent', () => {
  let component: RecommendationServiceExecutionComponent;
  let fixture: ComponentFixture<RecommendationServiceExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationServiceExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationServiceExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

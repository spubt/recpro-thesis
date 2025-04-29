import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationServiceModelingTableComponent } from './recommendation-service-modeling-table.component';

describe('RecommendationServiceModelingTableComponent', () => {
  let component: RecommendationServiceModelingTableComponent;
  let fixture: ComponentFixture<RecommendationServiceModelingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationServiceModelingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationServiceModelingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

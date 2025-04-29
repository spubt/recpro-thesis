import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationModuleComponent } from './recommendation-module.component';

describe('RecommendationModuleComponent', () => {
  let component: RecommendationModuleComponent;
  let fixture: ComponentFixture<RecommendationModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

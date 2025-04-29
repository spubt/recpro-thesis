import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionAnalysisComponent } from './dimension-analysis.component';

describe('DimensionAnalysisComponent', () => {
  let component: DimensionAnalysisComponent;
  let fixture: ComponentFixture<DimensionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

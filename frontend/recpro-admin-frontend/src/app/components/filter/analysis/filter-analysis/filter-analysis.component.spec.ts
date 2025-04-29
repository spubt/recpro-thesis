import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAnalysisComponent } from './filter-analysis.component';

describe('FilterAnalysisComponent', () => {
  let component: FilterAnalysisComponent;
  let fixture: ComponentFixture<FilterAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

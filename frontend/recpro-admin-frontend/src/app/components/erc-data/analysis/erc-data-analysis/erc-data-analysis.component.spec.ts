import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErcDataAnalysisComponent } from './erc-data-analysis.component';

describe('ErcDataAnalysisComponent', () => {
  let component: ErcDataAnalysisComponent;
  let fixture: ComponentFixture<ErcDataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErcDataAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErcDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

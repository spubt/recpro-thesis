import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmAnalysisComponent } from './bpm-analysis.component';

describe('BpmAnalysisComponent', () => {
  let component: BpmAnalysisComponent;
  let fixture: ComponentFixture<BpmAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpmAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

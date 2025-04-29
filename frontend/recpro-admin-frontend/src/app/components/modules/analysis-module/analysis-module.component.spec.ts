import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisModuleComponent } from './analysis-module.component';

describe('AnalysisModuleComponent', () => {
  let component: AnalysisModuleComponent;
  let fixture: ComponentFixture<AnalysisModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

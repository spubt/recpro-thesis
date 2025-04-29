import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalParameterTableComponent } from './environmental-parameter-table.component';

describe('EnvironmentalParameterTableComponent', () => {
  let component: EnvironmentalParameterTableComponent;
  let fixture: ComponentFixture<EnvironmentalParameterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalParameterTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalParameterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

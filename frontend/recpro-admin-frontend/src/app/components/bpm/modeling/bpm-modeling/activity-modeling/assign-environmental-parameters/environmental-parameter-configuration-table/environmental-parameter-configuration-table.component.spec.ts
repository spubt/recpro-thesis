import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalParameterConfigurationTableComponent } from './environmental-parameter-configuration-table.component';

describe('EnvironmentalParameterConfigurationTableComponent', () => {
  let component: EnvironmentalParameterConfigurationTableComponent;
  let fixture: ComponentFixture<EnvironmentalParameterConfigurationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalParameterConfigurationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalParameterConfigurationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

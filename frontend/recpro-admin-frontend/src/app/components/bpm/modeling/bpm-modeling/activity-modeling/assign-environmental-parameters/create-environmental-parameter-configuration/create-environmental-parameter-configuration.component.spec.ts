import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnvironmentalParameterConfigurationComponent } from './create-environmental-parameter-configuration.component';

describe('CreateEnvironmentalParameterConfigurationComponent', () => {
  let component: CreateEnvironmentalParameterConfigurationComponent;
  let fixture: ComponentFixture<CreateEnvironmentalParameterConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnvironmentalParameterConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnvironmentalParameterConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

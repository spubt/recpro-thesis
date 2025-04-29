import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNumericEnvironmentalParameterComponent } from './create-numeric-environmental-parameter.component';

describe('CreateNumericEnvironmentalParameterComponent', () => {
  let component: CreateNumericEnvironmentalParameterComponent;
  let fixture: ComponentFixture<CreateNumericEnvironmentalParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNumericEnvironmentalParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNumericEnvironmentalParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

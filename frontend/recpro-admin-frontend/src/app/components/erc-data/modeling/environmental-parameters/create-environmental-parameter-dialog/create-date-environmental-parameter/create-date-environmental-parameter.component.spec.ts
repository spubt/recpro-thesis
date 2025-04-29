import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDateEnvironmentalParameterComponent } from './create-date-environmental-parameter.component';

describe('CreateDateEnvironmentalParameterComponent', () => {
  let component: CreateDateEnvironmentalParameterComponent;
  let fixture: ComponentFixture<CreateDateEnvironmentalParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDateEnvironmentalParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDateEnvironmentalParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

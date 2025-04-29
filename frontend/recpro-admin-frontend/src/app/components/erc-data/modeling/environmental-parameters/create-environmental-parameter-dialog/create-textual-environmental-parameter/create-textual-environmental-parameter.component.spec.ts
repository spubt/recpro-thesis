import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextualEnvironmentalParameterComponent } from './create-textual-environmental-parameter.component';

describe('CreateTextualEnvironmentalParameterComponent', () => {
  let component: CreateTextualEnvironmentalParameterComponent;
  let fixture: ComponentFixture<CreateTextualEnvironmentalParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTextualEnvironmentalParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTextualEnvironmentalParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

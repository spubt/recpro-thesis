import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEnvironmentalParametersComponent } from './assign-environmental-parameters.component';

describe('AssignEnvironmentalParametersComponent', () => {
  let component: AssignEnvironmentalParametersComponent;
  let fixture: ComponentFixture<AssignEnvironmentalParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEnvironmentalParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEnvironmentalParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

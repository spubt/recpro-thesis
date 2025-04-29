import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexActivityParameterComponent } from './complex-activity-parameter.component';

describe('ComplexActivityParameterComponent', () => {
  let component: ComplexActivityParameterComponent;
  let fixture: ComponentFixture<ComplexActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

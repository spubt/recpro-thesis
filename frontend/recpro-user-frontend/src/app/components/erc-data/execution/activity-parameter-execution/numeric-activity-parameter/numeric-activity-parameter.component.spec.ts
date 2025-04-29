import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericActivityParameterComponent } from './numeric-activity-parameter.component';

describe('NumericActivityParameterComponent', () => {
  let component: NumericActivityParameterComponent;
  let fixture: ComponentFixture<NumericActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

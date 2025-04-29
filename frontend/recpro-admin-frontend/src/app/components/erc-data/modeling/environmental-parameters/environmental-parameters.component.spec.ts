import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalParametersComponent } from './environmental-parameters.component';

describe('EnvironmentalParametersComponent', () => {
  let component: EnvironmentalParametersComponent;
  let fixture: ComponentFixture<EnvironmentalParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

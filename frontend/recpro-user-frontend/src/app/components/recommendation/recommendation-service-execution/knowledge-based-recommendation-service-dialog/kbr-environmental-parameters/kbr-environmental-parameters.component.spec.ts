import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbrEnvironmentalParametersComponent } from './kbr-environmental-parameters.component';

describe('KbrEnvironmentalParametersComponent', () => {
  let component: KbrEnvironmentalParametersComponent;
  let fixture: ComponentFixture<KbrEnvironmentalParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KbrEnvironmentalParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbrEnvironmentalParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

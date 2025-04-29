import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBinaryEnvironmentalParameterComponent } from './create-binary-environmental-parameter.component';

describe('CreateBinaryEnvironmentalParameterComponent', () => {
  let component: CreateBinaryEnvironmentalParameterComponent;
  let fixture: ComponentFixture<CreateBinaryEnvironmentalParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBinaryEnvironmentalParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBinaryEnvironmentalParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

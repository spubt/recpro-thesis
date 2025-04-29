import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryActivityParameterComponent } from './binary-activity-parameter.component';

describe('BinaryActivityParameterComponent', () => {
  let component: BinaryActivityParameterComponent;
  let fixture: ComponentFixture<BinaryActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

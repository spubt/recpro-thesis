import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionModelingComponent } from './dimension-modeling.component';

describe('DimensionModelingComponent', () => {
  let component: DimensionModelingComponent;
  let fixture: ComponentFixture<DimensionModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

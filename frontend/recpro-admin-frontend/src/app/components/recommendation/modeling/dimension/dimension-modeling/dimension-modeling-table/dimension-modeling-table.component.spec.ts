import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionModelingTableComponent } from './dimension-modeling-table.component';

describe('DimensionModelingTableComponent', () => {
  let component: DimensionModelingTableComponent;
  let fixture: ComponentFixture<DimensionModelingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionModelingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionModelingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

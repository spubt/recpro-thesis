import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterModelingComponent } from './filter-modeling.component';

describe('FilterModelingComponent', () => {
  let component: FilterModelingComponent;
  let fixture: ComponentFixture<FilterModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

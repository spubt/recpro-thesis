import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterModelingModuleComponent } from './filter-modeling-module.component';

describe('FilterModelingModuleComponent', () => {
  let component: FilterModelingModuleComponent;
  let fixture: ComponentFixture<FilterModelingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterModelingModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterModelingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

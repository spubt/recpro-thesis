import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinalOptionTableComponent } from './ordinal-option-table.component';

describe('OrdinalOptionTableComponent', () => {
  let component: OrdinalOptionTableComponent;
  let fixture: ComponentFixture<OrdinalOptionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinalOptionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinalOptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

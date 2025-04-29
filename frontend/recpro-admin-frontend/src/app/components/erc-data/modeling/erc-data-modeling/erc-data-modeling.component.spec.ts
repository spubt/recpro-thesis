import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErcDataModelingComponent } from './erc-data-modeling.component';

describe('ErcDataModelingComponent', () => {
  let component: ErcDataModelingComponent;
  let fixture: ComponentFixture<ErcDataModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErcDataModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErcDataModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

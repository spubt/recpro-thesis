import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFilteringModuleComponent } from './pre-filtering-module.component';

describe('PreFilteringModuleComponent', () => {
  let component: PreFilteringModuleComponent;
  let fixture: ComponentFixture<PreFilteringModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreFilteringModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreFilteringModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

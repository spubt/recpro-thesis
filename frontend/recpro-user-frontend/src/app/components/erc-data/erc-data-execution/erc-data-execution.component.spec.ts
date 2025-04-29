import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErcDataExecutionComponent } from './erc-data-execution.component';

describe('ErcDataExecutionComponent', () => {
  let component: ErcDataExecutionComponent;
  let fixture: ComponentFixture<ErcDataExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErcDataExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErcDataExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

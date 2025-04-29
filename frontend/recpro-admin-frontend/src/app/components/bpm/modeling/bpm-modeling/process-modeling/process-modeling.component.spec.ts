import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessModelingComponent } from './process-modeling.component';

describe('ProcessModelingComponent', () => {
  let component: ProcessModelingComponent;
  let fixture: ComponentFixture<ProcessModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

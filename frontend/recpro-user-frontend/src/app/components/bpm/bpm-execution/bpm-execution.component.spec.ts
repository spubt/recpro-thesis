import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmExecutionComponent } from './bpm-execution.component';

describe('BpmExecutionComponent', () => {
  let component: BpmExecutionComponent;
  let fixture: ComponentFixture<BpmExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpmExecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

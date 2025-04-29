import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmModelingComponent } from './bpm-modeling.component';

describe('BpmModelingComponent', () => {
  let component: BpmModelingComponent;
  let fixture: ComponentFixture<BpmModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpmModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

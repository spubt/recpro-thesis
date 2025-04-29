import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmRoleModelingComponent } from './bpm-role-modeling.component';

describe('BpmRoleModelingComponent', () => {
  let component: BpmRoleModelingComponent;
  let fixture: ComponentFixture<BpmRoleModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpmRoleModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmRoleModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

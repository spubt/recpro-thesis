import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityModelingTableComponent } from './activity-modeling-table.component';

describe('ActivityModelingTableComponent', () => {
  let component: ActivityModelingTableComponent;
  let fixture: ComponentFixture<ActivityModelingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityModelingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityModelingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

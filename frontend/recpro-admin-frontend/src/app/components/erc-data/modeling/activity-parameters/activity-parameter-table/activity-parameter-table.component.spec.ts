import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityParameterTableComponent } from './activity-parameter-table.component';

describe('ActivityParameterTableComponent', () => {
  let component: ActivityParameterTableComponent;
  let fixture: ComponentFixture<ActivityParameterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityParameterTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityParameterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

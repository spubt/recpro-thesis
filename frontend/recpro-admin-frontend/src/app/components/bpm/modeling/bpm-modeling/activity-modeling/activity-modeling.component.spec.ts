import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityModelingComponent } from './activity-modeling.component';

describe('ActivityModelingComponent', () => {
  let component: ActivityModelingComponent;
  let fixture: ComponentFixture<ActivityModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

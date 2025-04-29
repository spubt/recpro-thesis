import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityParametersComponent } from './activity-parameters.component';

describe('ActivityParametersComponent', () => {
  let component: ActivityParametersComponent;
  let fixture: ComponentFixture<ActivityParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

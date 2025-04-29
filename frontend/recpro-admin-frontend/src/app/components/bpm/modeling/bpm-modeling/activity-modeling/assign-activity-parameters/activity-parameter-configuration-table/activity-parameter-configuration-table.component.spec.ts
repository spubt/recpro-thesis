import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityParameterConfigurationTableComponent } from './activity-parameter-configuration-table.component';

describe('ActivityParameterConfigurationTableComponent', () => {
  let component: ActivityParameterConfigurationTableComponent;
  let fixture: ComponentFixture<ActivityParameterConfigurationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityParameterConfigurationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityParameterConfigurationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityParameterConfigurationComponent } from './create-activity-parameter-configuration.component';

describe('CreateActivityParameterConfigurationComponent', () => {
  let component: CreateActivityParameterConfigurationComponent;
  let fixture: ComponentFixture<CreateActivityParameterConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateActivityParameterConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityParameterConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

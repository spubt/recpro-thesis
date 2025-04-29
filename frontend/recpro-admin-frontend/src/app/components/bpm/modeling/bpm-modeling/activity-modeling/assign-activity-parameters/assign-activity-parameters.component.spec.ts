import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignActivityParametersComponent } from './assign-activity-parameters.component';

describe('AssignActivityParametersComponent', () => {
  let component: AssignActivityParametersComponent;
  let fixture: ComponentFixture<AssignActivityParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignActivityParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignActivityParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

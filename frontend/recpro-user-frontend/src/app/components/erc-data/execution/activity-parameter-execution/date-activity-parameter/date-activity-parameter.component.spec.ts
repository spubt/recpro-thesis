import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateActivityParameterComponent } from './date-activity-parameter.component';

describe('DateActivityParameterComponent', () => {
  let component: DateActivityParameterComponent;
  let fixture: ComponentFixture<DateActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNumericActivityParameterComponent } from './create-numeric-activity-parameter.component';

describe('CreateNumericActivityParameterComponent', () => {
  let component: CreateNumericActivityParameterComponent;
  let fixture: ComponentFixture<CreateNumericActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNumericActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNumericActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

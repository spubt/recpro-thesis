import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextualActivityParameterComponent } from './create-textual-activity-parameter.component';

describe('CreateTextualActivityParameterComponent', () => {
  let component: CreateTextualActivityParameterComponent;
  let fixture: ComponentFixture<CreateTextualActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTextualActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTextualActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

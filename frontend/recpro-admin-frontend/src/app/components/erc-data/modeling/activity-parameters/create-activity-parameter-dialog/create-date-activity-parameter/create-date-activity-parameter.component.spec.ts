import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDateActivityParameterComponent } from './create-date-activity-parameter.component';

describe('CreateDateActivityParameterComponent', () => {
  let component: CreateDateActivityParameterComponent;
  let fixture: ComponentFixture<CreateDateActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDateActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDateActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

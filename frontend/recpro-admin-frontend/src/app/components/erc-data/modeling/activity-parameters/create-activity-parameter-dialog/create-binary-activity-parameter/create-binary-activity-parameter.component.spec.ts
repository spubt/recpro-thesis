import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBinaryActivityParameterComponent } from './create-binary-activity-parameter.component';

describe('CreateBinaryActivityParameterComponent', () => {
  let component: CreateBinaryActivityParameterComponent;
  let fixture: ComponentFixture<CreateBinaryActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBinaryActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBinaryActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

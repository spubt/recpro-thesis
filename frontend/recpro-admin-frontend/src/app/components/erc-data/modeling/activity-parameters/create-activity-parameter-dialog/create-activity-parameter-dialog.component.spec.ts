import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityParameterDialogComponent } from './create-activity-parameter-dialog.component';

describe('CreateActivityParameterComponent', () => {
  let component: CreateActivityParameterDialogComponent;
  let fixture: ComponentFixture<CreateActivityParameterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateActivityParameterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityParameterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

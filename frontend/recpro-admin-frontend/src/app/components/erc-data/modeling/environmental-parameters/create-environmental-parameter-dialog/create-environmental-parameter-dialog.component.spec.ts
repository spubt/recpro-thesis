import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnvironmentalParameterDialogComponent } from './create-environmental-parameter-dialog.component';

describe('CreateEnvironmentalParameterDialogComponent', () => {
  let component: CreateEnvironmentalParameterDialogComponent;
  let fixture: ComponentFixture<CreateEnvironmentalParameterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEnvironmentalParameterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnvironmentalParameterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

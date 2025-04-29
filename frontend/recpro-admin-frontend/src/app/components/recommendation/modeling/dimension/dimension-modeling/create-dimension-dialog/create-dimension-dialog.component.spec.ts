import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDimensionDialogComponent } from './create-dimension-dialog.component';

describe('CreateDimensionDialogComponent', () => {
  let component: CreateDimensionDialogComponent;
  let fixture: ComponentFixture<CreateDimensionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDimensionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDimensionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMetaAttributeDialogComponent } from './create-meta-attribute-dialog.component';

describe('CreateMetaAttributeDialogComponent', () => {
  let component: CreateMetaAttributeDialogComponent;
  let fixture: ComponentFixture<CreateMetaAttributeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMetaAttributeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMetaAttributeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

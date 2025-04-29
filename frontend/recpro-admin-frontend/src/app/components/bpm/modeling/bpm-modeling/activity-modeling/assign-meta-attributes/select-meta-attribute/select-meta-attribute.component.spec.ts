import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMetaAttributeComponent } from './select-meta-attribute.component';

describe('SelectMetaAttributeComponent', () => {
  let component: SelectMetaAttributeComponent;
  let fixture: ComponentFixture<SelectMetaAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMetaAttributeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMetaAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

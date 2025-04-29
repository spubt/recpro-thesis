import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMetaAttributesComponent } from './assign-meta-attributes.component';

describe('AssignMetaAttributesComponent', () => {
  let component: AssignMetaAttributesComponent;
  let fixture: ComponentFixture<AssignMetaAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignMetaAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignMetaAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

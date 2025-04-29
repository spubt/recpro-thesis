import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAttributesComponent } from './meta-attributes.component';

describe('MetaAttributesComponent', () => {
  let component: MetaAttributesComponent;
  let fixture: ComponentFixture<MetaAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

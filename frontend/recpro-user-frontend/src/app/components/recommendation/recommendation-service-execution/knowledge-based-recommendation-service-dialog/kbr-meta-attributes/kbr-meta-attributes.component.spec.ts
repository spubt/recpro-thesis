import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbrMetaAttributesComponent } from './kbr-meta-attributes.component';

describe('KbrMetaAttributesComponent', () => {
  let component: KbrMetaAttributesComponent;
  let fixture: ComponentFixture<KbrMetaAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KbrMetaAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbrMetaAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

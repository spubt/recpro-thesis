import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAttributesTableComponent } from './meta-attributes-table.component';

describe('MetaAttributesTableComponent', () => {
  let component: MetaAttributesTableComponent;
  let fixture: ComponentFixture<MetaAttributesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaAttributesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaAttributesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

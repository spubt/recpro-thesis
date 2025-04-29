import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAttributeConfigurationTableComponent } from './meta-attribute-configuration-table.component';

describe('MetaAttributeConfigurationTableComponent', () => {
  let component: MetaAttributeConfigurationTableComponent;
  let fixture: ComponentFixture<MetaAttributeConfigurationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaAttributeConfigurationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaAttributeConfigurationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

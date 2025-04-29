import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaAttributeConfigurationComponent } from './meta-attribute-configuration.component';

describe('MetaAttributeConfigurationComponent', () => {
  let component: MetaAttributeConfigurationComponent;
  let fixture: ComponentFixture<MetaAttributeConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaAttributeConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaAttributeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

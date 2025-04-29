import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbrActivityParametersComponent } from './kbr-activity-parameters.component';

describe('KbrActivityParametersComponent', () => {
  let component: KbrActivityParametersComponent;
  let fixture: ComponentFixture<KbrActivityParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KbrActivityParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbrActivityParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

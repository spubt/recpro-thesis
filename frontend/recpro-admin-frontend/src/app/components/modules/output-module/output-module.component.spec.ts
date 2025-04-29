import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputModuleComponent } from './output-module.component';

describe('OutputModuleComponent', () => {
  let component: OutputModuleComponent;
  let fixture: ComponentFixture<OutputModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualActivityParameterComponent } from './textual-activity-parameter.component';

describe('TextualActivityParameterComponent', () => {
  let component: TextualActivityParameterComponent;
  let fixture: ComponentFixture<TextualActivityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextualActivityParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextualActivityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

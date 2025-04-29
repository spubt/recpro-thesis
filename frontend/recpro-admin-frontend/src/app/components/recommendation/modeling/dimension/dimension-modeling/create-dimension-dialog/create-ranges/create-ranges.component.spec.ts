import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRangesComponent } from './create-ranges.component';

describe('CreateRangesComponent', () => {
  let component: CreateRangesComponent;
  let fixture: ComponentFixture<CreateRangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

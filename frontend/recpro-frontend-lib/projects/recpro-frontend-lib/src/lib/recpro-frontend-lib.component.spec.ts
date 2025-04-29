import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecproFrontendLibComponent } from './recpro-frontend-lib.component';

describe('RecproFrontendLibComponent', () => {
  let component: RecproFrontendLibComponent;
  let fixture: ComponentFixture<RecproFrontendLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecproFrontendLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecproFrontendLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

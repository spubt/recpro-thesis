import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistEntryComponent } from './tasklist-entry.component';

describe('TasklistEntryComponent', () => {
  let component: TasklistEntryComponent;
  let fixture: ComponentFixture<TasklistEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklistEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

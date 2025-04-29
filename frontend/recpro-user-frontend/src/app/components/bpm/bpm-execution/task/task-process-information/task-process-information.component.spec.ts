import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProcessInformationComponent } from './task-process-information.component';

describe('TaskProcessInformationComponent', () => {
  let component: TaskProcessInformationComponent;
  let fixture: ComponentFixture<TaskProcessInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskProcessInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskProcessInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

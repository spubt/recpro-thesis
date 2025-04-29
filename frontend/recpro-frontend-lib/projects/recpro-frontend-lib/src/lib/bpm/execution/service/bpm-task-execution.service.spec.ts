import { TestBed } from '@angular/core/testing';

import { BpmTaskExecutionService } from './bpm-task-execution.service';

describe('BpmTaskExecutionService', () => {
  let service: BpmTaskExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpmTaskExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

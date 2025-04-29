import { TestBed } from '@angular/core/testing';

import { BpmProcessExecutionService } from './bpm-process-execution.service';

describe('BpmProcessExecutionService', () => {
  let service: BpmProcessExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpmProcessExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

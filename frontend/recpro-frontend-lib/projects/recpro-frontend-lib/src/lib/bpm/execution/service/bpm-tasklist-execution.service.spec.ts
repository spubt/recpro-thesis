import { TestBed } from '@angular/core/testing';

import { BpmTasklistExecutionService } from './bpm-tasklist-execution.service';

describe('BpmTasklistExecutionService', () => {
  let service: BpmTasklistExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpmTasklistExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

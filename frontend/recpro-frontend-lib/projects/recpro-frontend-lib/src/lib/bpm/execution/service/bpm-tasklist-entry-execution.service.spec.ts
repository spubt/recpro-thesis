import { TestBed } from '@angular/core/testing';

import { BpmTasklistEntryExecutionService } from './bpm-tasklist-entry-execution.service';

describe('BpmTasklistEntryExecutionService', () => {
  let service: BpmTasklistEntryExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpmTasklistEntryExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

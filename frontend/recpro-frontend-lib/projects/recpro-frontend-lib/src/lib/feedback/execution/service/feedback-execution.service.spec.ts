import { TestBed } from '@angular/core/testing';

import { FeedbackExecutionService } from './feedback-execution.service';

describe('FeedbackExecutionService', () => {
  let service: FeedbackExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

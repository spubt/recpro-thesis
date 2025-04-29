import { TestBed } from '@angular/core/testing';

import { FeedbackModelingService } from './feedback-modeling.service';

describe('FeedbackModelingService', () => {
  let service: FeedbackModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

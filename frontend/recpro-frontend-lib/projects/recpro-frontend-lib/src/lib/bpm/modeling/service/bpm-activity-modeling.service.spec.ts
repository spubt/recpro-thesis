import { TestBed } from '@angular/core/testing';

import { BpmActivityModelingService } from './bpm-activity-modeling.service';

describe('BpmActivityModelingService', () => {
  let service: BpmActivityModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpmActivityModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

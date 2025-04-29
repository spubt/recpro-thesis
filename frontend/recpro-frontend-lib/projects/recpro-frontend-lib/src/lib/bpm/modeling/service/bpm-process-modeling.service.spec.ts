import { TestBed } from '@angular/core/testing';

import { BpmProcessModelingService } from './bpm-process-modeling.service';

describe('BpmProcessModelingService', () => {
  let service: BpmProcessModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpmProcessModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

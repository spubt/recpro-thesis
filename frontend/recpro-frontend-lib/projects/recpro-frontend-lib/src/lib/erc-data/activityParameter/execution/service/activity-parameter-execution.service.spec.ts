import { TestBed } from '@angular/core/testing';

import { ActivityParameterExecutionService } from './activity-parameter-execution.service';

describe('ActivityParameterExecutionService', () => {
  let service: ActivityParameterExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityParameterExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

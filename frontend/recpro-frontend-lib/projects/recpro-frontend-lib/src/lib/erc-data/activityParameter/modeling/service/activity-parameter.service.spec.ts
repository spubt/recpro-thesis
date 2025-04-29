import { TestBed } from '@angular/core/testing';

import { ActivityParameterService } from './activity-parameter.service';

describe('ActivityParameterService', () => {
  let service: ActivityParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

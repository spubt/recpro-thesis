import { TestBed } from '@angular/core/testing';

import { ActivityParameterModelingService } from './activity-parameter-modeling.service';

describe('ActivityParameterModelingService', () => {
  let service: ActivityParameterModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityParameterModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

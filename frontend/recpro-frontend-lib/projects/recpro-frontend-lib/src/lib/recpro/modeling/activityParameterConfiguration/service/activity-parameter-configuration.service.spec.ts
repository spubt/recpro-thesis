import { TestBed } from '@angular/core/testing';

import { ActivityParameterConfigurationService } from './activity-parameter-configuration.service';

describe('ActivityParameterConfigurationService', () => {
  let service: ActivityParameterConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityParameterConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

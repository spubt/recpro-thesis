import { TestBed } from '@angular/core/testing';

import { EnvironmentalParameterConfigurationService } from './environmental-parameter-configuration.service';

describe('EnvironmentalParameterConfigurationService', () => {
  let service: EnvironmentalParameterConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentalParameterConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

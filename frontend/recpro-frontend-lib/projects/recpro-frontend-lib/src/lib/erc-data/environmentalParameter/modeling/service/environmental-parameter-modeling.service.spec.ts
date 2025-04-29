import { TestBed } from '@angular/core/testing';

import { EnvironmentalParameterModelingService } from './environmental-parameter-modeling.service';

describe('EnvironmentalParameterModelingService', () => {
  let service: EnvironmentalParameterModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentalParameterModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

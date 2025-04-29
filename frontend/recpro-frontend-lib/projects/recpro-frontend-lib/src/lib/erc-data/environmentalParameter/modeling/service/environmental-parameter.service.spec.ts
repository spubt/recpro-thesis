import { TestBed } from '@angular/core/testing';

import { EnvironmentalParameterService } from './environmental-parameter.service';

describe('EnvironmentalParameterService', () => {
  let service: EnvironmentalParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentalParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

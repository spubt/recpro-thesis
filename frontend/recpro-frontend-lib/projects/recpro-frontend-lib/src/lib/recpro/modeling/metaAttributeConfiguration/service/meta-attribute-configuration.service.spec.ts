import { TestBed } from '@angular/core/testing';

import { MetaAttributeConfigurationService } from './meta-attribute-configuration.service';

describe('MetaAttributeConfigurationService', () => {
  let service: MetaAttributeConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaAttributeConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

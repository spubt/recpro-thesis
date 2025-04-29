import { TestBed } from '@angular/core/testing';

import { MetaAttributeModelingService } from './meta-attribute-modeling.service';

describe('MetaAttributeModelingService', () => {
  let service: MetaAttributeModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaAttributeModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

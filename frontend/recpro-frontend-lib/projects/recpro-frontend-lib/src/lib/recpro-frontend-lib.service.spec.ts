import { TestBed } from '@angular/core/testing';

import { RecproFrontendLibService } from './recpro-frontend-lib.service';

describe('RecproFrontendLibService', () => {
  let service: RecproFrontendLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecproFrontendLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

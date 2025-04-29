import { TestBed } from '@angular/core/testing';

import { UserModelingService } from './user-modeling.service';

describe('UserModelingService', () => {
  let service: UserModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

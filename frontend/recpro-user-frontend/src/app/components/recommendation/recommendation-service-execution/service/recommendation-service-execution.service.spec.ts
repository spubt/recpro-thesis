import { TestBed } from '@angular/core/testing';

import { RecommendationServiceExecutionService } from './recommendation-service-execution.service';

describe('RecommendationServiceExecutionService', () => {
  let service: RecommendationServiceExecutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationServiceExecutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

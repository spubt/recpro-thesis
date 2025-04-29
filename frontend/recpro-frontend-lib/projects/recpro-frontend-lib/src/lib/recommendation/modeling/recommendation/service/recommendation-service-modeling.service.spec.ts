import { TestBed } from '@angular/core/testing';

import { RecommendationServiceModelingService } from './recommendation-service-modeling.service';

describe('RecommendationServiceModelingService', () => {
  let service: RecommendationServiceModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationServiceModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

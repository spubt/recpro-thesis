import { TestBed } from '@angular/core/testing';

import { RecommendationDimensionModelingService } from './recommendation-dimension-modeling.service';

describe('RecommendationDimensionModelingService', () => {
  let service: RecommendationDimensionModelingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationDimensionModelingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

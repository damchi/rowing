import { TestBed } from '@angular/core/testing';

import { CoachEntrainementsCategoriesService } from './coach-entrainements-categories.service';

describe('CoachEntrainementsCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachEntrainementsCategoriesService = TestBed.get(CoachEntrainementsCategoriesService);
    expect(service).toBeTruthy();
  });
});

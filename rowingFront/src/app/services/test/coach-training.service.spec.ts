import { TestBed } from '@angular/core/testing';

import { CoachTrainingService } from '../coach-training.service';

describe('CoachTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachTrainingService = TestBed.get(CoachTrainingService);
    expect(service).toBeTruthy();
  });
});

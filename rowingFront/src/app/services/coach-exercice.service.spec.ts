import { TestBed } from '@angular/core/testing';

import { CoachExerciceService } from './coach-exercice.service';

describe('CoachExerciceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachExerciceService = TestBed.get(CoachExerciceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CoachTypeExerciceService } from './coach-type-exercice.service';

describe('CoachTypeExerciceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachTypeExerciceService = TestBed.get(CoachTypeExerciceService);
    expect(service).toBeTruthy();
  });
});

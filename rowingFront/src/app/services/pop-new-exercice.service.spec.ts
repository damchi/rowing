import { TestBed } from '@angular/core/testing';

import { PopNewExerciceService } from './pop-new-exercice.service';

describe('PopNewExerciceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopNewExerciceService = TestBed.get(PopNewExerciceService);
    expect(service).toBeTruthy();
  });
});

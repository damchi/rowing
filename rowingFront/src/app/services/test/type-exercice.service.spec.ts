import { TestBed } from '@angular/core/testing';

import { TypeExerciceService } from '../type-exercice.service';

describe('TypeExerciceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeExerciceService = TestBed.get(TypeExerciceService);
    expect(service).toBeTruthy();
  });
});

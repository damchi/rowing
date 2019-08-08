import { TestBed } from '@angular/core/testing';

import { CoachEntrainementsService } from './coach-entrainements.service';

describe('CoachEntrainementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachEntrainementsService = TestBed.get(CoachEntrainementsService);
    expect(service).toBeTruthy();
  });
});

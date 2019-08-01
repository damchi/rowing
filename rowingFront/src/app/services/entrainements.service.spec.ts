import { TestBed } from '@angular/core/testing';

import { EntrainementsService } from './entrainements.service';

describe('EntrainementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntrainementsService = TestBed.get(EntrainementsService);
    expect(service).toBeTruthy();
  });
});

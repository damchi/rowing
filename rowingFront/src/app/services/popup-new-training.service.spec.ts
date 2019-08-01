import { TestBed } from '@angular/core/testing';

import { PopupNewTrainingService } from './popup-new-training.service';

describe('PopupNewTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopupNewTrainingService = TestBed.get(PopupNewTrainingService);
    expect(service).toBeTruthy();
  });
});

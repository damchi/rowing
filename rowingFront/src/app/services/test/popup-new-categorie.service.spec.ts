import { TestBed } from '@angular/core/testing';

import { PopupNewCategorieService } from '../popup-new-categorie.service';

describe('PopupNewCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopupNewCategorieService = TestBed.get(PopupNewCategorieService);
    expect(service).toBeTruthy();
  });
});

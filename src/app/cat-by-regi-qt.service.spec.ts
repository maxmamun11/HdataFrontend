import { TestBed } from '@angular/core/testing';

import { CatByRegiQTService } from './cat-by-regi-qt.service';

describe('CatByRegiQTService', () => {
  let service: CatByRegiQTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByRegiQTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

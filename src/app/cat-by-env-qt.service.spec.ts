import { TestBed } from '@angular/core/testing';

import { CatByEnvQTService } from './cat-by-env-qt.service';

describe('CatByEnvQTService', () => {
  let service: CatByEnvQTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByEnvQTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

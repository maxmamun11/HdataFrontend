import { TestBed } from '@angular/core/testing';

import { CatByEnvService } from './cat-by-env.service';

describe('CatByEnvService', () => {
  let service: CatByEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

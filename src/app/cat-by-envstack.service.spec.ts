import { TestBed } from '@angular/core/testing';

import { CatByEnvstackService } from './cat-by-envstack.service';

describe('CatByEnvstackService', () => {
  let service: CatByEnvstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByEnvstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

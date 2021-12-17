import { TestBed } from '@angular/core/testing';

import { CatByRegistackService } from './cat-by-registack.service';

describe('CatByRegistackService', () => {
  let service: CatByRegistackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByRegistackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

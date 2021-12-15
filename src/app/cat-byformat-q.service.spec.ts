import { TestBed } from '@angular/core/testing';

import { CatByformatQService } from './cat-byformat-q.service';

describe('CatByformatQService', () => {
  let service: CatByformatQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByformatQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

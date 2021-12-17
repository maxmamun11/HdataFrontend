import { TestBed } from '@angular/core/testing';

import { CatByRegiService } from './cat-by-regi.service';

describe('CatByRegiService', () => {
  let service: CatByRegiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatByRegiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TopCatThreeService } from './top-cat-three.service';

describe('TopCatThreeService', () => {
  let service: TopCatThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCatThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TopCatTwService } from './top-cat-tw.service';

describe('TopCatTwService', () => {
  let service: TopCatTwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCatTwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

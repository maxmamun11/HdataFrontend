import { TestBed } from '@angular/core/testing';

import { TopCatNSService } from './top-cat-ns.service';

describe('TopCatNSService', () => {
  let service: TopCatNSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCatNSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

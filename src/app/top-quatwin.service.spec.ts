import { TestBed } from '@angular/core/testing';

import { TopQuatwinService } from './top-quatwin.service';

describe('TopQuatwinService', () => {
  let service: TopQuatwinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopQuatwinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

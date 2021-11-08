import { TestBed } from '@angular/core/testing';

import { TopQuaNinService } from './top-qua-nin.service';

describe('TopQuaNinService', () => {
  let service: TopQuaNinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopQuaNinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

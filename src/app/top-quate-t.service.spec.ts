import { TestBed } from '@angular/core/testing';

import { TopQuateTService } from './top-quate-t.service';

describe('TopQuateTService', () => {
  let service: TopQuateTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopQuateTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

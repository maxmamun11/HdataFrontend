import { TestBed } from '@angular/core/testing';

import { TwintyOneCtgService } from './twinty-one-ctg.service';

describe('TwintyOneCtgService', () => {
  let service: TwintyOneCtgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwintyOneCtgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

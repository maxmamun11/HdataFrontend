import { TestBed } from '@angular/core/testing';

import { TwintyOneQthreeService } from './twinty-one-qthree.service';

describe('TwintyOneQthreeService', () => {
  let service: TwintyOneQthreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwintyOneQthreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

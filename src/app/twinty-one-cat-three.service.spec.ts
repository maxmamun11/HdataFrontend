import { TestBed } from '@angular/core/testing';

import { TwintyOneCatThreeService } from './twinty-one-cat-three.service';

describe('TwintyOneCatThreeService', () => {
  let service: TwintyOneCatThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwintyOneCatThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

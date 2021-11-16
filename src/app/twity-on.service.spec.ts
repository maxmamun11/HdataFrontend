import { TestBed } from '@angular/core/testing';

import { TwityOnService } from './twity-on.service';

describe('TwityOnService', () => {
  let service: TwityOnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwityOnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

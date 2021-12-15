import { TestBed } from '@angular/core/testing';

import { StackTwityOneService } from './stack-twity-one.service';

describe('StackTwityOneService', () => {
  let service: StackTwityOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackTwityOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

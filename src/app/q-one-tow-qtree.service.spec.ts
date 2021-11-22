import { TestBed } from '@angular/core/testing';

import { QOneTowQtreeService } from './q-one-tow-qtree.service';

describe('QOneTowQtreeService', () => {
  let service: QOneTowQtreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QOneTowQtreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

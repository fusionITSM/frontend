import { TestBed } from '@angular/core/testing';

import { FusionitsmService } from './fusionitsm.service';

describe('FusionitsmService', () => {
  let service: FusionitsmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FusionitsmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RandomIdService } from './random-id.service';

describe('RandomIdService', () => {
  let service: RandomIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

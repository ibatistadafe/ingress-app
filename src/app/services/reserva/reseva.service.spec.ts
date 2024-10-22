import { TestBed } from '@angular/core/testing';

import { ResevaService } from './reseva.service';

describe('ResevaService', () => {
  let service: ResevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

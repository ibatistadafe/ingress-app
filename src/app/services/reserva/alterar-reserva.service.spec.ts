import { TestBed } from '@angular/core/testing';

import { AlterarReservaService } from './alterar-reserva.service';

describe('AlterarReservaService', () => {
  let service: AlterarReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterarReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

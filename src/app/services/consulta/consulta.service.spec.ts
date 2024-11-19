import { TestBed } from '@angular/core/testing';

import { ConsultaService } from './consulta.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConsultaService', () => {
  let service: ConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

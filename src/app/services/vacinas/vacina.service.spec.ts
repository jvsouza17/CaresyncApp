import { TestBed } from '@angular/core/testing';

import { VacinaService } from './vacina.service';
import { HttpClientModule } from '@angular/common/http';

describe('VacinaService', () => {
  let service: VacinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] 
    });
    service = TestBed.inject(VacinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

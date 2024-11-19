import { TestBed } from '@angular/core/testing';

import { ExameService } from './exame.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExameService', () => {
  let service: ExameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ExameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

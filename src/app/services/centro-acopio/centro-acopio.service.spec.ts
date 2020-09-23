import { TestBed } from '@angular/core/testing';

import { CentroAcopioService } from './centro-acopio.service';

describe('CentroAcopioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentroAcopioService = TestBed.get(CentroAcopioService);
    expect(service).toBeTruthy();
  });
});

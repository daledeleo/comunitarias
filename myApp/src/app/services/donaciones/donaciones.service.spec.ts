import { TestBed } from '@angular/core/testing';

import { DonacionesService } from './donaciones.service';

describe('DonacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonacionesService = TestBed.get(DonacionesService);
    expect(service).toBeTruthy();
  });
});

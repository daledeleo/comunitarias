import { TestBed } from '@angular/core/testing';

import { DistribucionService } from './distribucion.service';

describe('DistribucionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistribucionService = TestBed.get(DistribucionService);
    expect(service).toBeTruthy();
  });
});

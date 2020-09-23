import { TestBed } from '@angular/core/testing';

import { CreteByService } from './create-by.service';

describe('CreteByService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreteByService = TestBed.get(CreteByService);
    expect(service).toBeTruthy();
  });
});
